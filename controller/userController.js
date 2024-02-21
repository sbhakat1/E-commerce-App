import userModel from '../model/userModel.js'
import cloudinary from 'cloudinary'
import { getDataUri } from '../utils/features.js'
//Register
export const registerController = async (req,res) => {
    try {
        const {name, email, password, address, city, country, phone, answer} = req.body
        //validation
        if(!name || !email || !password || !address || !city || !country || !phone || !answer) {
            return res.status(500).send({
                success:false,
                message: "Please provide all fields",
            })
        }
        //check existing user
        const existingUser = await userModel.findOne({email})
        //validation
        if (existingUser) {
            return res.status(500).send({
                success:false,
                message: "email already taken"
            })
        }

        const user = await userModel.create({name, email, password, address, city, country, phone, answer})
        res.status(201).send({
            success: true,
            message: "Registration Success, Please Login",
            user,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error In Register API',
            error
        })
    }
}

//Login
export const loginController = async (req, res) => {
    try {
        const {email, password} = req.body
        if ( !email || !password) {
            return res.status(500).send({
                success:'false',
                message: "Please add email or password",
            })
        }
        //check user
        const user = await userModel.findOne({email})
        //user validation
        if(!user) {
            return res.status(404).send({
                success:'false',
                message:'User not found',
            })
        }
        //check password
        const isMatch = await user.comparePassword(password)
        //validation password
        if (!isMatch) {
            return res.status(500).send({
                success: false,
                message:'invalid credentials',
            })
        }
        //token
        const token = user.generateToken()

        res
            .status(201)
            .cookie("token", token, {
                expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
                secure: process.env.NODE_ENV === "development" ? true : false,
                httpOnly: process.env.NODE_ENV === "development" ? true : false,
                sameSite: process.env.NODE_ENV === "development" ? true : false,
            })
            .send({
            success:true,
            message:"Login Successfully",
            token,
            user,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:'false',
            message: 'Error in Login Api',
            error
        })
    }
}

//Get User Profile
export const getUserProfileController = async (req, res) => {
    try {
        const user = await userModel.findById(req.user._id)
        user.password = undefined
        res.status(200).send({
            success:true,
            message:'User Profile Fetched Successfully',
            user
        })
    } catch (error) {
      console.log(error)
      res.status(500).send({
        success: false,
        message: 'Error in Profile API',
        error
      })  
    }
}

//LOgout
export const logoutController = async (req, res) => {
    try {
        res.status(200).cookie('token',"", {
            expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
            secure: process.env.NODE_ENV === "development" ? true : false,
            httpOnly: process.env.NODE_ENV === "development" ? true : false,
            sameSite: process.env.NODE_ENV === "development" ? true : false,
        }).send ({
            success: true,
            message: "Logout Successfully"
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
          success: false,
          message: 'Error in Profile API',
          error
        }) 
    }
}

//Update User Profile
export const updateProfileController = async (req, res) => {
    try {
        const user = await userModel.findById(req.user._id)
        const {name, email, address, city, country, phone} = req.body
        //validation + update
        if(name) user.name = name
        if(email) user.email = email
        if(address) user.address = address
        if(city) user.city = city
        if(country) user.country = country
        if(phone) user.phone = phone
    //save user
        await user.save()
        res.status(200).send({
            success: true,
            message: "User Profile Updated"
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
          success: false,
          message: 'Error in Profile Update API',
          error
        })
    }
}

//User Update Password
export const updatePasswordController = async(req, res) => {
    try {
        const user = await userModel.findById(req.user._id)
        const {oldPassword, newPassword} = req.body
        //validation
        if(!oldPassword || !newPassword) {
            return res.status(200).send({
                success:true,
                message:"Please provide old or new password"
            })
        }
    //old password check
    const isMatch = await user.comparePassword(oldPassword)
    //validation
    if(!isMatch) {
        return res.status(500).send({
            success:false,
            message:"Invalid Old Password"
        })
    }
    user.password = newPassword
    //save password
    await user.save()

    res.status(200).send({
        success:true,
        message:"Password Updated Successfully"
    })
    } catch (error) {
        console.log(error)
        res.status(500).send({
          success: false,
          message: 'Error in Password Update API',
          error
        })
    }
}

export const updateProfilePicController = async (req, res) => {
    try {
        const user = await userModel.findById(req.user._id)
        //file get from client photo
        const file = getDataUri(req.file)
        //delete previous pic
        await cloudinary.v2.uploader.destroy(user.profilePic.public_id)
        //update
        const cdb = await cloudinary.v2.uploader.upload(file.content)
        user.profilePic = {
            public_id: cdb.public_id,
            url: cdb.secure_url,
        }
        //save function
        await user.save()

        res.status(200).send({
            success:true,
            message:'Profile Picture Updated'
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
          success: false,
          message: 'Error in Profile Pic Update API',
          error
        })
    }
}

//Forgot Password
export const passwordResetController = async(req, res) => {
    try {
        //user get email || newPassword || answer
        const {email, newPassword, answer} = req.body
        //validation
        if(!email || !newPassword || !answer){
            return res.status(500).send({
                success:false,
                message:"Please provide all fields"
            })
        }
        //find user
        const user = await userModel.findOne({email, answer})
        //validation
        if(!user){
            return res.status(404).send({
                success:false,
                message:"Invalid user or answer"
            })
        }
        user.password = newPassword
        await user.save()
        res.status(200).send({
            success:true,
            message:"Your password has been reset please Login !"
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
          success: false,
          message: 'Error in Profile Pic Update API',
          error
        })   
    }
}