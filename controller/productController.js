import productModel from "../model/productModel.js";
import cloudinary from 'cloudinary'
import { getDataUri } from "../utils/features.js";

//Get All Products
export const getAllProductsController = async (req, res) => {
    const {keyword, category} = req.query
    try {
        const products = await productModel.find({
            name: {
                $regex: keyword ? keyword: "",
                $options: "i"
            }
        }).populate("category")
        res.status(200).send({
            success: true,
            message: 'All Products Fetched Successfully',
            totalProducts: products.length,
            products
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in Get All Products API',
            error
        })
    }
}

//Get Single Product
export const getSingleProductController = async (req, res) => {
    try {
        //get product ID
        const product = await productModel.findById(req.params.id)
        //validation
        if(!product){
            return res.status(404).send({
                success:false,
                message:'Product not found'
            })
        }
        res.status(200).send({
            success: true,
            message: 'Product Found',
            product
        })
    } catch (error) {
        console.log(error)
        //Cast Error || Object ID
        if (error.name === "CastError") {
            return res.status(500).send({
                success:false,
                message:'Invalid ID'
            })
        }
        res.status(500).send({
            success: false,
            message: 'Error in Get Single Product API'
        })
    }
}

//Create Product
export const createProductController = async(req, res) => {
    try {
        const {name, description, price, category, stock} = req.body
        // //validation
        // if(!name || !description || price || stock){
        //     return res.status(500).send({
        //         success:false,
        //         message:'Please provide all fields'
        //     })
        // }
        if(!req.file){
            return res.status(500).send({
                success:false,
                message:'Please provide product images'
            })
        }
        const file = getDataUri(req.file)
        const cdb = await cloudinary.v2.uploader.upload(file.content)
        const image = {
            public_id: cdb.public_id,
            url: cdb.secure_url,
        }
        await productModel.create({
            name, description, price, category, stock, images: [image],
        })
        res.status(201).send({
            success:true,
            message:'Product Created Successfully',
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in Creating Product API'
        })
    }
}
//Update Product
export const updateProductController = async (req, res) => {
    try {
        //find product
        const product = await productModel.findById(req.params.id)
        //validation
        if(!product){
            return res.status(404).send({
                success:false,
                message:'Product not found'
            })
        }
        const {name, description, price, category, stock} = req.body
        //validate and update
        if (name) product.name = name
        if (description) product.description = description
        if (price) product.price = price
        if (category) product.category = category
        if (stock) product.stock = stock
        //save
        await product.save()
        res.status(200).send({
            success:true,
            message:'Product Details Updated'
        })
    } catch (error) {
        console.log(error)
        //Cast Error || Object ID
        if (error.name === "CastError") {
            return res.status(500).send({
                success:false,
                message:'Invalid ID'
            })
        }
        res.status(500).send({
            success: false,
            message: 'Error in Update Product API'
        })
    }
}

//Update Product Image
export const updateProductImageController = async(req, res) => {
    try {
        //find product
        const product = await productModel.findById(req.params.id)
        //validation
        if(!product){
            return res.status(404).send({
                success:false,
                message:'Product not found'
            })
        }
        //check file
        if(!req.file){
            return res.status(404).send({
                success:false,
                message:'Product image not found'
            })
        }
        const file = getDataUri(req.file)
        const cdb = await cloudinary.v2.uploader.upload(file.content)
        const image = {
            public_id: cdb.public_id,
            url: cdb.secure_url
        }
        //save
        product.images.push(image)
        await product.save()
        res.status(200).send({
            success: true,
            message:'Product image updated'
        })
    } catch (error) {
        console.log(error)
        //Cast Error || Object ID
        if (error.name === "CastError") {
            return res.status(500).send({
                success:false,
                message:'Invalid ID'
            })
        }
        res.status(500).send({
            success: false,
            message: 'Error in Update Image Product API'
        })
    }
}

//Delete Product image
export const deleteProductImageController = async (req, res) => {
    try {
        //find product
        const product = await productModel.findById(req.params.id)
        //validation
        if (!product){
            return res.status(404).send({
                success:false,
                message:"Product not found"
            })
        }
        //image id find
        const id = req.query.id
        if(!id){
            return res.status(404).send({
                success:false,
                message:"Product image not found"
            })
        }
        let isExist = -1
        product.images.forEach((item, index) => {
            if (item._id.toString() === id.toString()) isExist = index 
        })
        if (isExist < 0){
            return res.status(404).send({
                success:false,
                message:"Image not found"
            })
        }
        //Delete product image
        await cloudinary.v2.uploader.destroy(product.images[isExist].public_id)
        product.images.splice(isExist, 1)
        await product.save()
        return res.status(200).send({
            success:true,
            message:"Product image deleted successfully"
        })
    } catch (error) {
        console.log(error)
        //Cast Error || Object ID
        if (error.name === "CastError") {
            return res.status(500).send({
                success:false,
                message:'Invalid ID'
            })
        }
        res.status(500).send({
            success: false,
            message: 'Error in Update Image Product API'
        })
    }
}

//Delete Product
export const deleteProductController = async(req, res) => {
    try {
        //find product
        const product = await productModel.findById(req.params.id)
        //validation
        if (!product){
            return res.status(404).send({
                success:false,
                message:"Product not found"
            })
        }
        //find and delete image cloudinary
        for(let i=0; i < product.images.length; i++) {
            await cloudinary.v2.uploader.destroy(product.images[i].public_id)
        }
        await product.deleteOne()
        res.status(200).send({
            success:true,
            message:"Product Deleted Successfully"
        })
    } catch (error) {
        console.log(error)
        //Cast Error || Object ID
        if (error.name === "CastError") {
            return res.status(500).send({
                success:false,
                message:'Invalid ID'
            })
        }
        res.status(500).send({
            success: false,
            message: 'Error in Deleting Product API'
        })
    }
}
// Review Product
export const reviewController = async (req, res) => {
    try {
        const {comment, rating} = req.body
        //find product
        const product = await productModel.findById(req.params.id)
        //check previous review
        const alreadyReviewed = product.reviews.find( (r) => r.user.toString() === req.user._id.toString() )
        if(alreadyReviewed){
            return res.status(400).send({
                success:false,
                message:"Product already reviewed"
            })
        }
        //review object
        const review = {
            name: req.user.name,
            rating: Number(rating),
            comment,
            user: req.user._id
        }
        // passing review object to review array
        product.reviews.push(review)
        // number or review
        product.numReviews = product.reviews.length
        product.rating = product.reviews.reduce((accumulator, item) => item.rating + accumulator, 0) / product.reviews.length
        //save
        await product.save()
        res.status(200).send({
            success:true,
            message:"Review Added!"
        })
    } catch (error) {
        console.log(error)
        //Cast Error || Object ID
        if (error.name === "CastError") {
            return res.status(500).send({
                success:false,
                message:'Invalid ID'
            })
        }
        res.status(500).send({
            success: false,
            message: 'Error in Review Comment API'
        })
    }
}