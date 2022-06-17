const mongoose = require('mongoose')


const emplyeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        
        
    },
    number: {
        type: Number,
        required: true,
        min: 11,
    },
    nic: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
})

const employee =  new mongoose.model('employee',emplyeeSchema);

module.exports = employee;