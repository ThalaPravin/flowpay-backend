import mongoose from "mongoose";
import becrypt from 'becrypt'

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        email: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    },
    
    {
        timestamp: true
    }
);

userSchema.methods.matchPassword= async function (enteredPass) {
    return await becrypt.compare(enteredPass, this.password);
}

const User = mongoose.model('User', userSchema);
export default User;

