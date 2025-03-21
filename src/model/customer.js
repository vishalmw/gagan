import mongoose, { Schema } from "mongoose";

// Define Schema
const customerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensure email is unique
    },
    pass: {
      type: String,
      required: true,
    },
  } ,{ timestamps: true }

);

// ✅ Correct model export to prevent duplicate model errors
const Customer = mongoose.models.Customer || mongoose.model("Customer", customerSchema);
export default Customer;
