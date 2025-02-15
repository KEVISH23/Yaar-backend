import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    categoryName:{
        type:String,
        trim:true,
        required:[true,'Title is required']
    },
},{
    timestamps:true
})

const Category = mongoose.model('category',CategorySchema)
export {Category}