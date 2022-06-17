const mongoose = require('mongoose')


const emplyeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const employee =  new mongoose.model('education',emplyeeSchema);

module.exports = employee;