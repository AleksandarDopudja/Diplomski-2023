import mongoose from "mongoose";

const Schema = mongoose.Schema;

let DisOrder = new Schema({
    dos1: {
        type: String
    },
    dos2: {
        type: String
    },
    date:{
        type: Date
    },
    sec:{
        type: Array<String>
    },
    txt:{
        type: Array<String>
    },
    status:{
        type: String
    },
    orgusername:{
        type: String
    }
})

export default mongoose.model('DisOrder', DisOrder, 'disorder');