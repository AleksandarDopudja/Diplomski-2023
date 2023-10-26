import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Sale = new Schema({
    idmu: {
        type: String
    },
    idpro: {
        type: String
    },
    time:{
        type: Date
    }
})

export default mongoose.model('Sale', Sale, 'sale');