import { NextResponse } from "next/server";
import connectDb from "@/lib/db";
import customer from "@/model/customer";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    // Parse JSON body
    const body = await req.json();
    const { name, email, pass } = body;

    // Check for missing fields
    if (!name || !email || !pass) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Connect to database
    await connectDb();

    // Hash the password using bcryptjs
    const hashedPassword = await bcrypt.hash(pass, 10);

    // Save the new customer to the database with the hashed password
    await customer.create({ name, email, pass: hashedPassword });
    
    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration Error:", error);
    return NextResponse.json(
      { message: "Server error. Not registered." },
      { status: 500 }
    );
  }
}
