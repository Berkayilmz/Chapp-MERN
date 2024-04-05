const userModel = require('../models/userModel')
const bcrypt = require('bcryptjs');
const generateTokenAndSetCookie = require('../utils/generateToken');


// -------------------- LOGIN FUNCTION -----------------------

const login = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const user = await userModel.findOne({ userName });
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || '');

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: 'Invalid user name or password!' });
        }

        generateTokenAndSetCookie(user._id,res)

        res.status(200).json({
            _id:user._id,
            fullName:user.fullName,
            userName:user.userName,
            profilePic:user.profilePic
        });

    } catch (error) {
        console.log('Error in login controller', error.message)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}



// -------------------- LOGOUT FUNCTION -----------------------

const logout = async (req, res) => {
    try {
        res.cookie('jwt','',{maxAge:0});
        res.status(200).json({message: 'Logged out succesfully'});
    } catch (error) {
        console.log('Error in login controller', error.message)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}


// ------------------SINGUP FUNCTION----------------------

const signup = async (req, res) => {
    try {
        const { fullName, userName, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            res.status(400).json({ error: 'Passwords do not match!' });
        }

        const user = await userModel.findOne({ userName });

        if (user) {
            res.status(400).json({ error: 'Username is already exists' });
        }

        //HASH PASSWORD

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);


        //Avatar Picts
        const boyProfilPic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
        const girlProfilPic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

        const newUser = new userModel({
            fullName: fullName,
            userName: userName,
            password: hashedPassword,
            gender: gender,
            profilePic: gender === 'male' ? boyProfilPic : girlProfilPic
        })

        if (newUser) {
            //Generate JWT token 
            await generateTokenAndSetCookie(newUser._id, res);

            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                userName: newUser.userName,
                profilePic: newUser.profilePic
            });
        } else {
            res.status(400).json({ error: 'Invalid user data' });
        }

    } catch (error) {
        console.log('Error in signup controller', error.message)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

module.exports = { login, logout, signup }