import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Machine = new Schema({
    name: {
        type: String
    },
    about: {
        type: String
    },
    h: {
        type: Number
    },
    w: {
        type: Number
    },
    d: {
        type: Number
    },
    weight: {
        type: Number
    },
    foto: {
        type: String
    },
    price: {
        type: Number
    },
    cap:{
        type: Number
    }
})

export default mongoose.model('Machine', Machine, 'machines');