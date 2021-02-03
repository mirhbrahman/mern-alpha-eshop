import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'
import asyncHandler from "express-async-handler";

const protect = asyncHandler(async(req, res, next)=>{
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            token = req.headers.authorization.split(' ')[1]
            const decode = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decode.id).select("-password")
            next()
        }catch (e) {
            res.status(401)
            throw new Error('Authentication fail')
        }
    }

    if (!token){
        res.status(401)
        throw new Error('Authentication fail')
    }
})

export {protect}