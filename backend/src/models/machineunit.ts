import mongoose from "mongoose";

const Schema = mongoose.Schema;

let MachineUnit = new Schema({
    
    type:{
        type: String
    },
    date:{
        type: Date
    },
    price:{
        type: Number
    },
    content:{
        type: Array
    }
})

export default mongoose.model('MachineUnit', MachineUnit, 'machineunits');