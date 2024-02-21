import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        shippingInfo:{
            address: {
                type: String,
                required:[true, 'address is required']
            },
            city: {
                type: String,
                required:[true, 'city name is required']
            },
            country: {
                type: String,
                required:[true, 'country name is required']
            },
        },
        orderItems:[
            {
                name:{
                    type: String,
                    required: [true,'Product name is require']
                },
                price:{
                    type: Number,
                    required: [true,'Product price is require']
                },
                quantity:{
                    type: String,
                    required: [true,'Product quantity is required']
                },
                image:{
                    type: String,
                    required: [true,'Product image is required']
                },
                product:{
                    type: mongoose.Schema.Types.ObjectId,
                    ref:'Products',
                    required:true
                }
            }
        ],
        paymentMethod:{
            type: String,
            enum: ["COD","ONLINE"],
            default:"COD"
        },
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'Users',
            required:[true, 'user id is require']
        },
        paidAt:Date,
        paymentInfo:{
            id:String,
            status: String
        },
        itemPrice:{
            type: Number,
            required:[true, 'item price is require']
        },
        tax:{
            type: Number,
            required:[true, 'tax price is require']
        },
        shippingCharges:{
            type: Number,
            required:[true, 'item shipping charges is require']
        },
        totalAmount:{
            type: Number,
            required:[true, 'item total amount is require']
        },
        orderStatus:{
            type: String,
            enum:['processing', 'shipped', 'delivered'],
            default: 'processing'
        },
        deliveredAt: Date
    },{ timestamps:true }
)

export const orderModel = mongoose.model("Orders", orderSchema)
export default orderModel