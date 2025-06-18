import SubCategoryModel from "../models/subCategory.model.js";

export const AddSubCategoryController = async(request,response)=>{
    try {
        const { name, image, category } = request.body 

        if(!name && !image && !category[0] ){
            return response.status(400).json({
                message : "Provide name, image, category",
                error : true,
                success : false
            })
        }


    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}
