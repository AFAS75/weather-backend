const mongoose = require('mongoose');

const userSchema = mongoose.Schema ({
    userName: {type: String, trim:true},
    email: {type: String, unique: true, trim: true},
    password: String,
    emailVerified: {type: Boolean, default: false},
})

const User = mongoose.model('users', userSchema);

module.exports = User;