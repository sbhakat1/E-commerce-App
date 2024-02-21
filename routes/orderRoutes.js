import express from "express";
import { isAdmin, isAuthentication } from "../middlewares/authMiddleware.js";
import { changeOrderStatusController, createOrderController, getAllOrdersController, myordersController, paymentController, singleOrdersController } from "../controller/orderController.js";

const router = express.Router()

//===================== order routers ========================
//Create All Category
router.post('/create', isAuthentication, createOrderController)

//My Orders
router.get("/myorders", isAuthentication, myordersController)

//Single Order
router.get("/myorders/:id", isAuthentication, singleOrdersController)

//Accept Payments
router.post("/payment", isAuthentication, paymentController)

// ================ Admin Part ==================
//get all orders
router.get("/admin/get-all-orders", isAuthentication, isAdmin, getAllOrdersController)

//change orders status
router.put("/admin/order/:id", isAuthentication, isAdmin, changeOrderStatusController)



export default router