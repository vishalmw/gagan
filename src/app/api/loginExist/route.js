import { NextResponse } from "next/server";
import connectDb from "@/lib/db";
import Customer from "@/model/customer";

export async function POST(req) {
  try {
    await connectDb();
    const { email } = await req.json();
    const existingCustomer = await Customer.findOne({ email }).select('_id');
    console.log("Customer found:", existingCustomer);
    return NextResponse.json({ customer: existingCustomer });
  } catch (error) {
    console.error("Login existence check error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
