import mongoose from "mongoose";

const Schema = mongoose.Schema;

let User = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    tell: {
        type: String
    },
    mail: {
        type: String
    },
    foto: {
        type: String
    },
    type: {
        type: Number
    },
    status: {
        type: Number
    },
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    agencyname: {
        type: String
    }, 
    country: {
        type: String
    },
    city: {
        type: String
    },
    street: {
        type: String
    },
    mb: {
        type: String
    },
    about: {
        type: String
    }
})

export default mongoose.model('User', User, 'users');