import mongoose from "mongoose";

const Schema = mongoose.Schema;

let ClientReq = new Schema({
    clientusername: {
        type: String
    },
    type: {
        type: String
    },
    cvan:{
        type: Number
    },
    mtype:{
        type: String
    },
    addres:{
        type: String
    }
})

export default mongoose.model('ClientReq', ClientReq, 'clientreq');