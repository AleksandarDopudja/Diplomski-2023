import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Product = new Schema({
    name: {
        type: String
    },
    company: {
        type: String
    },
    inprice:{
        type: Number
    },
    type:{
        type: String
    },
    weight: {
        type: String
    },
    foto: {
        type: String
    }
})

export default mongoose.model('Product', Product, 'products');