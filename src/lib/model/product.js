import mongoose from "mongoose";
const customerSchema= new mongoose.Schema({
    email:String
 
})

const Customer =mongoose.models.customer || mongoose.model("customer", customerSchema);

module.exports = Customer;