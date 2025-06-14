import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
        const { email, name, password  } = req.body;
        try {
             if (!email || !password || !name) {
                throw new Error("All fields are required");
             }

             const userAlreadyExists = await User.findOne({ email });
             if (userAlreadyExists) {
                return res.status(400).json({success:false, message: "User already exists" });
             }

             const hashedPassword = await bcryptjs.hash(password, 10);
             const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();
             const user = new User({
                email,
                password: hashedPassword,
                name,
                verificationToken,
                verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
             });
                await user.save();

                // jwt
                generateTokenAndSetCookie(res, user._id);

                res.status(201).json({ 
                        success: true, 
                        message: "User created successfully", 
                        user: {
                                ...user._doc, // Spread the user document
                                password: undefined, // Exclude password from response
                        }
                });

        } catch (error) {
          res.status(400).json({ success: false, message: error.message }); 
        }
}

export const login = async (req, res) => {
        res.send("Login Page");
}

export const logout = async (req, res) => {
        res.send("Logout Page");
}