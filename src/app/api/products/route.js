import { Customer } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
// import { connection } from '@/lib/db';

// Singleton pattern to prevent multiple connections

const connection =
  "mongodb+srv://vishal07252:Sito786@miningsource.2kov9.mongodb.net/?retryWrites=true&w=majority&appName=MiningSource";
  // console.log(connection)
export async function GET() {

    await mongoose.connect(connection);
    const data = await Customer.find();
    console.log("data", data);
    return NextResponse.json({ result: data });
  
}
