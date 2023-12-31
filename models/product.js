import { Schema,model,models } from "mongoose";

const productSchema = new Schema({
    name : {
        type: String,
        required : true,
    },
    description:{
        type: String,
        required : true,
    },
    price: {
       type : Number,   
       required : true,
    },
    image:{
        type: String,
        required: true
    },
    minQty: {
       type : Number,   
       required : true,
    }
});

const Product = models.Product || model('Product',productSchema);

export default Product;