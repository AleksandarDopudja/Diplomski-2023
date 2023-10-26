import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Car = new Schema({
    reg: {
        type: String
    },
    model: {
        type: String
    },
    crew:{
        type: Array
    },
    capcrew:{
        type: Number
    },
    capstorage:{
        type: Number
    },
    foto:{
        type: String
    }
})

export default mongoose.model('Car', Car, 'cars');