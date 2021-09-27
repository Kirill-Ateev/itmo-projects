import fs from 'fs';
import express from 'express';
import bodyParser from 'body-parser';
import crypto from 'crypto';
import http from 'http';
import appSrc from './app.js';
import UserModel from './models/User.js';
import UserController from './routes/UserController.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

dotenv.config({path: './.env'})
const PORT = process.env.PORT || 443;

const User = UserModel(mongoose);
const app = appSrc(
  express,
  bodyParser,
  cookieParser,
  fs,
  crypto,
  http,
  User,
  UserController
);

const start = async () => {
  try {
    // await mongoose.connect(process.env.DB_URL, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });
    app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();