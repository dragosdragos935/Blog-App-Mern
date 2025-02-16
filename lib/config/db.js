import mongoose from "mongoose";

 export const ConnectDB = async ()=>{
    await mongoose.connect('mongodb+srv://dragosdragos935:mongoisthebest@cluster0.y5ary.mongodb.net/blog-app');
    console.log("DB Connected");
}