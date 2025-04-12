import jwt from 'jsonwebtoken'

const generateToken =(userId)=>{
    const payload ={id: userId};
    const secret =process.env.JWT_SECRET;
    const expiry = { expiresIn : '1h'};

    return jwt.sign(payload,secret, expiry);
}
export default generateToken;
