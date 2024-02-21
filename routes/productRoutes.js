import express from "express";
import { createProductController, deleteProductController, deleteProductImageController, getAllProductsController, getSingleProductController, reviewController, updateProductController, updateProductImageController } from "../controller/productController.js";
import { isAdmin, isAuthentication } from "../middlewares/authMiddleware.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router()

//===================== product routers ========================
//All Get Product
router.get('/get-all', getAllProductsController)

//Get Single Product
router.get('/:id', getSingleProductController)

//Create Product
router.post('/create', isAuthentication, isAdmin, singleUpload, createProductController)

//Update Product
router.put('/:id', isAuthentication, isAdmin, updateProductController)

//Update Product Image
router.put('/image/:id', isAuthentication, isAdmin, singleUpload, updateProductImageController)

//Delete Product Image
router.delete("/delete-image/:id", isAuthentication, isAdmin, deleteProductImageController)

//Delete Product
router.delete("/delete-product/:id", isAuthentication,isAdmin, deleteProductController)

//Review Product
router.put("/:id/review", isAuthentication, reviewController)

export default router