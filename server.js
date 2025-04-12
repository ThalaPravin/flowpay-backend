import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './Routes/UserRoute.js'

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('api/users', userRoutes)
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log("Backend Is Running on Port:"+PORT);
});