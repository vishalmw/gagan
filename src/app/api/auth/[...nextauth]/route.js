import connectDb from "@/lib/db";
import Customer from "@/model/customer";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email@example.com" },
        pass: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const { email, pass } = credentials;
        try {
          await connectDb();
          const customer = await Customer.findOne({ email });
          console.log("Customer found:", customer);
          if (!customer) {
            console.log("No customer with that email.");
            return null;
          }
          const passwordMatch = await bcrypt.compare(pass, customer.pass);
          console.log("Password match:", passwordMatch);
          if (!passwordMatch) {
            console.log("Password does not match.");
            return null;
          }
          return customer;
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/Login"
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
