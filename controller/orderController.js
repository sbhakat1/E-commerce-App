import { stripe } from "../index.js";
import orderModel from "../model/orderModel.js";
import productModel from "../model/productModel.js";

//Create Order
export const createOrderController = async (req, res) => {
  try {
    const {
      shippingInfo,
      orderItems,
      paymentMethod,
      paymentInfo,
      itemPrice,
      tax,
      shippingCharges,
      totalAmount,
    } = req.body;
    //validation:
    //create order
    await orderModel.create({
      user: req.user._id,
      shippingInfo,
      orderItems,
      paymentMethod,
      paymentInfo,
      itemPrice,
      tax,
      shippingCharges,
      totalAmount,
    });
    //stock update
    for( let i=0; i < orderItems.length; i++) {
        //find product
        const product = await productModel.findById(orderItems[i].product)
        product.stock -= orderItems[i].quantity
        await product.save()
    }
    res.status(200).send({
        success:true,
        message:"Order Placed Successfully"
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Create Order API",
      error,
    });
  }
};

//My Orders
export const myordersController = async(req, res) => {
    try {
        //find orders
        const orders = await orderModel.find({user: req.user._id})
        //validation
        if(!orders){
            return res.status(404).send({
                success:false,
                message:"No orders found"
            })
        }
        res.status(200).send({
            success:true,
            message:"Yours orders data",
            totalOrder: orders.length,
            orders
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: "Error In My Orders API",
          error,
        }) 
    }
}
export const singleOrdersController = async(req, res) => {
    try {
        //find orders
        const orders = await orderModel.findById(req.params.id)
        //validation
        if(!orders){
            return res.status(404).send({
                success:false,
                message:"No order found"
            })
        }
        res.status(200).send({
            success:true,
            message:"Yours order data",
            orders
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: "Error In My Orders API",
          error,
        }) 
    }
}

//Accept Payment
export const paymentController = async(req, res) => {
    try {
        //get amount
        const {totalAmount} = req.body
        //validation
        if(!totalAmount)
            return res.status(404).send({
                success:false,
                message: "Total Amount is Require"
            })
        const {client_secret} = await stripe.paymentIntents.create({
            amount: Number(totalAmount * 100),
            currency: "inr",
        })
        res.status(200).send({
            success: true,
            client_secret,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: "Error In Accepting Payments API",
          error,
        })  
    }
}

// ================ Admin Part ====================

export const getAllOrdersController = async(req, res) => {
    try {
        const orders = await orderModel.find({})
        res.status(200).send({
            success:true,
            message:"All orders data",
            totalOrder: orders.length,
            orders
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: "Error In Accepting Payments API",
          error,
        })
    }
}

//Change order Status
export const changeOrderStatusController = async (req, res) => {
    try {
        const order = await orderModel.findById(req.params.id)
        //validation
        if(!order){
            return res.status(404).send({
                success:false,
                message:"order not found"
            })
        }
        if(order.orderStatus === "processing") order.orderStatus = "shipped"
        else if (order.orderStatus === "shipped"){
            order.orderStatus = "delivered"
            order.deliveredAt = Date.now()
        }else{
            return res.status(500).send({
                success:false,
                message:"order already delivered"
            })
        }
        await order.save()
        res.status(200).send({
            
            success:true,
            message:"order status updated"
        })
    } catch (error) {
        console.log(error);
        //Cast error || OBJECT ID
        if (error.name === "CastError") {
            res.status(500).send({
                success:false,
                message:"Invalid ID"
            })
        }
        res.status(500).send({
          success: false,
          message: "Error In Accepting Payments API",
          error,
        })
    }
}