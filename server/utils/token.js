const jwt = require('jsonwebtoken');
const {SECRET_KEY} = require("../config");

const token = {
    generate: ({ id,username }, expiresIn) => {
        return jwt.sign({ id,username }, SECRET_KEY , { expiresIn });
    }
};

module.exports = token;