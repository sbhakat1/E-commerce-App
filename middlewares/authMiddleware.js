import userModel from "../model/userModel.js"
import JWT from 'jsonwebtoken'

//USER AUTH
export const isAuthentication = async (req, res, next) => {
    const {token} = req.cookies
    //validation
    if (!token) {
        return res.status(401).send({
            success: false,
            message: 'Unauthorized User'
        })
    }
    const decodeData = JWT.verify(token, process.env.JWT_SECRET)
    req.user = await userModel.findById(decodeData._id)
    next()
}

//ADMIN AUTH
export const isAdmin = async(req, res, next) => {
    if(req.user.role !== "admin") {
        return res.status(401).send({
            success: false,
            message: "admin only",
        })
    }
    next()
}