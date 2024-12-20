const {defalut : moongoose, mongo } = require('mongoose');
const userSchema = mongoose.Schema({
    name : {
        type : String,
        maxLength : 50
    },
    email : {
        type : String,
        trim : true,
        unique : true
    }, 
    password : {
        type : String,
        minlength : 56
    },
    role : {
        type : Number,
        default : 0
    },
    image : String
})

const User = mongoose.model('User', userSchema);

module.exports = User;