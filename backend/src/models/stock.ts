import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Stock = new Schema({
    idp: {
        type: String
    },
    ids: {
        type: String
    },
    quantity:{
        type: Number
    }
})

export default mongoose.model('Stock', Stock, 'stock');