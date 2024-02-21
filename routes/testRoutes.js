import express from 'express'
import { testController } from '../controller/testController.js'


//routes object
const router = express.Router()

//routes
router.get("/test", testController)

export default router