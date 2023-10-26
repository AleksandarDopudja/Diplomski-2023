import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Req = new Schema({
    idu: {
        type: String
    },
    machines: {
        type: Array
    },
    status:{
        type: Number
    },
    type:{
        type: Number
    },
    date:{
        type: Date
    }
})

export default mongoose.model('Req', Req, 'req');