import express from "express";
import bcrypt from "bcrypt";
import cors from "cors"
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import { validationResult } from "express-validator/src/validation-result.js";
import router from "./router/index.js";

import {singUpValodation } from "./validation/auth.js";

mongoose
    .connect('mongodb+srv://admin:NQhnYbGDQlJ60qvX@cluster0.hs61rvc.mongodb.net/blog?retryWrites=true&w=majority')
    .then(() => console.log('ok'))
    .catch((err) => console.log(err))


const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api', router)


const start = async () => {
    try {
        app.listen(4444, () => console.log('server started'))
    } catch(err) {
        console.log('err');
    }
}

start();

