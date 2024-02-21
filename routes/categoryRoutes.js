import express from "express";
import { isAdmin, isAuthentication } from "../middlewares/authMiddleware.js";
import { categoryCreateController, deleteCategoryController, getAllCategoryController, updateCategoryController } from "../controller/categoryController.js";

const router = express.Router()

//===================== category routers ========================
//Create All Category
router.post('/create', isAuthentication, isAdmin, categoryCreateController)

//Get All Category
router.get('/get-all', getAllCategoryController)

//Delete Category
router.delete('/delete/:id', isAuthentication, isAdmin, deleteCategoryController)

//Update Category
router.put('/update/:id',isAdmin, isAuthentication, updateCategoryController)

export default router