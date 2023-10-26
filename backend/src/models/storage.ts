import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Storage = new Schema({
    name: {
        type: String
    },
    location: {
        type: String
    },
    mail:{
        type: String
    },
    tell:{
        type: String
    },
    space:{
        type: Number
    },
    x:{
        type: Number
    },
    y:{
        type: Number
    }
})

export default mongoose.model('Storage', Storage, 'storages');