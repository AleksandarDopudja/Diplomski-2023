import mongoose from "mongoose";

const Schema = mongoose.Schema;

let MapOfProd = new Schema({
    idmu: {
        type: String
    },
    map: {
        type: Array
    }
})

export default mongoose.model('MapOfProd', MapOfProd, 'mapofproducts');