import express from 'express'
import { getUserProfileController, loginController, logoutController, passwordResetController, registerController, updatePasswordController, updateProfileController, updateProfilePicController } from '../controller/userController.js'
import { isAuthentication } from '../middlewares/authMiddleware.js'
import { singleUpload } from '../middlewares/multer.js'
import { rateLimit } from 'express-rate-limit'

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Use an external store for consistency across multiple server instances.
})

//routes object
const router = express.Router()

//routes:
//register
router.post('/register', limiter, registerController)
//login
router.post('/login', limiter, loginController)

//profile
router.get('/profile', isAuthentication, getUserProfileController)

//logout
router.get('/logout', isAuthentication, logoutController)

//update-profile
router.put('/profile-update', isAuthentication, updateProfileController)

//update-password
router.put('/password-update', isAuthentication, updatePasswordController)

//udate-profile pic
router.put('/update-picture', isAuthentication, singleUpload, updateProfilePicController)

//Forgot Password
router.post('/reset-password', isAuthentication, passwordResetController)

//export
export default router