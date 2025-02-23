
const express = require('express')
const router = express.Router()
const user = require('../models/Users')
const { body, validationResult } = require('express-validator')

const jwt = require('jsonwebtoken')
const jwtsecret = "jfsodkfpcwecmsldefokcpweod"

const bcrypt = require('bcryptjs');

router.post("/createuser", [
    body('email').isEmail(),
    body('password', 'Incorrect Password').isLength({ min: 4 })],    //signing up
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const salt = await bcrypt.genSalt(10);
        let securepassword = await bcrypt.hash(req.body.password, salt)

        try {
            await user.create({
                name: req.body.name,
                password: securepassword,
                email: req.body.email,
                location: req.body.location
            })
            res.json({ success: true });
        } catch (error) {
            console.log(error)
            res.json({ success: false });

        }
    })



router.post("/Loginuser", [body('email').isEmail(),  //logging in
body('password', 'IncorrectPassword').isLength({ min: 4 })],
    async (req, res) => {
        const errors = validationResult(req);    //request data given from frontend
        if (!errors.isEmpty()) {
            console.log("Validation errors:", errors.array());
            return res.status(400).json({ errors: errors.array() })
        }

        //let email = req.body.email 
        const { email, password } = req.body;
//request data given from frontenf

        try {
            let userdata = await user.findOne({ email }); //mongodb data. 
            if (!userdata) {
                return res.status(400).json({ errors: "Try correct credentials" })
            }   //comparing mongodbdata with data given from frontend

            const pwdCompare = await bcrypt.compare(password, userdata.password) //comparing hashed password
    
            if (!pwdCompare) {
                return res.status(400).json({ errors: "Try correct credentials" })
            }

            const data = {
                user:{
                    id: userdata.id //using id to sign the token

                }
            }
            console.log("user", data)
            const authToken = jwt.sign(data,jwtsecret)
            {
                return res.json({ success: "True",authToken:authToken })  //sending auth token with success
            }
        } catch (error) {
            console.log(error)
            res.json({ success: false });

        }
    })



module.exports = router;
