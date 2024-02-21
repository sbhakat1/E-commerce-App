import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, 'product name is required']
    },
    description:{
        type: String,
        required:[true, "product description is required"]
    },
    price:{
        type: String,
        required:[true, "product price is required"]
    },
    stock:{
        type: Number,
        required:[true, "product stock required"]
    },
    // quantity:{
    //     type: Number,
    //     required:[true, "product quantity required"]
    // },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
    },
    images:[
        {
            public_id: String,
            url: String
        },
    ],
    reviews:[
        {
            name:{
                type: String,
                required:[true, "Product Review Require"]
            },
            rating:{
                type: Number,
                default: 0
            },
            comment:{
                type: String
            },
            user:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "Users",
                required: [true, "user require"],
            }
        }
    ],
    rating:{
        type:Number,
        default: 0
    },
    numReviews: {
        type: Number,
        default: 0
    }
}, {timestamps:true})

export const productModel = mongoose.model("Products", productSchema)
export default productModel