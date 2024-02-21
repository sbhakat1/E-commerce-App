import categoryModel from "../model/categoryModel.js"
import productModel from "../model/productModel.js"

//Create all category
export const categoryCreateController = async(req, res) => {
    try {
        const {category} = req.body
        //validation
        if(!category){
            return res.status(404).send({
                success:false,
                message:"Category not found"
            })
        }
        await categoryModel.create({category})
        res.status(201).send({
            success:true,
            message:`${category} Category Created Successfully`
        })
    } catch (error) {
       console.log(error)
       res.status(500).send({
        success:false,
        message:"Error in Creating Category API"
       }) 
    }
}

//Get all category
export const getAllCategoryController = async(req, res) => {
    try {
        const categories = await categoryModel.find({})
        res.status(200).send({
            success:true,
            message:"Categories Fetch Successfully",
            totalCategories: categories.length,
            categories
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
        success:false,
        message:"Error in Getting All Category API"
       })
    }
}

//Delete Category
export const deleteCategoryController = async(req, res) => {
    try {
        //find category
        const category = await categoryModel.findById(req.params.id)
        //validation
        if(!category){
            return res.status(404).send({
                success:false,
                message:"Category not found"
            })
        }
        //find product with this category id
        const product = await productModel.find({category:category._id})
        //update product category
        for(let i=0; i < product.length; i++){
            const product = product[i]
            product.category = undefined
            await product.save()
        }
        //delete
        await category.deleteOne()
        res.status(200).send({
            success:true,
            message:"Category Deleted Successfully"
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in Getting All Category API"
        })
    }
}

//Update all category
export const updateCategoryController = async(req,res) => {
    try {
        //find category
        const category = await categoryModel.findById(req.params.id)
        //validation
        if(!category){
            return res.status(404).send({
                success:false,
                message:"Category not found"
            })
        }
        const {updatedCategory} = req.body
        //find product with this category id
        const product = await productModel.find({category:category._id})
        //update product category
        for(let i=0; i < product.length; i++){
            const product = product[i]
            product.category = updatedCategory
            await product.save()
        }
        //get updated category
        if (updatedCategory) category.category = updatedCategory;
        //save
        await category.save()
        res.status(200).send({
            success:true,
            message:"Category Updated Successfully"
        })
    } catch (error) {
        console.log(error)
        //cast error || Object ID
        if (error.name === "CastError") {
            return res.status(500).send({
                success:false,
                message:"Invalid ID"
            })
        }
        res.status(500).send({
            success:false,
            message:"Error in Updating All Category API"
        })
    }
}