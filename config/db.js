import mongoose from "mongoose";

const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI  );
        // console.log(process.env.MONGO_URI);
        console.log(`Connected To MongoDB ${conn.connection.host}`);
    }
    catch(error){
        console.log('Error is occured');
        console.error(error.message);
        process.exit(1);
    }
}

export default connectDB;