const bcrypt = require('bcryptjs');
const {UserInputError} = require('apollo-server');

const generateToken = require("../../../utils/token");
const {validateRegisterInput, validateLoginInput} = require("../../../utils/validators");

module.exports = {
    register: async (parent,{registerInput:{username,password, confirmPassword}},{User})=>{
        const {errors, valid} = validateRegisterInput(username,password,confirmPassword);
        if(!valid){
            throw new UserInputError('Errors:',{errors});
        }

        const user = await User.findOne({username});

        if(user){
            throw new Error("User already exist");
        }

        return await new User({
            username,
            password
        }).save()
    },
    login: async (parent,{username,password}, {User}) =>{
        const {errors, valid} = validateLoginInput(username,password);
        if(!valid){
            throw new UserInputError('Errors:',{errors});
        }

        const user = await User.findOne({username});

        if(!user){
            throw new Error("User not exist");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            throw new Error("Password is incorrect")
        }

        const token = generateToken.generate(user, '1h');

        return {
            ...user._doc,
            id: user._id,
            token
        };
    }
};