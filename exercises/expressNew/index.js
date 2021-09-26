import fs from 'fs';
import express from 'express';
import bodyParser from 'body-parser';
import crypto from 'crypto';
import http from 'http';
import appSrc from './app.js';

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
  "Access-Control-Allow-Headers": "x-test,Content-Type,Accept,Access-Control-Allow-Headers"
};

const PORT = process.env.PORT || 443;

const app = appSrc(express, bodyParser, fs, 
    crypto, http, CORS);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));