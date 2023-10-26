import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Location = new Schema({
    x: {
        type: Number
    },
    y: {
        type: Number
    },
    name:{
        type: String
    },
    addr:{
        type: String
    },
    idRR:{
        type:Array
    },
    idSR:{
        type:Array
    }
})

export default mongoose.model('Location', Location, 'locations');