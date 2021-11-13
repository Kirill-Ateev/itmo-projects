const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const sizeOf = require('image-size');
var Busboy = require('busboy');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Нужно будет добавить на Yandex Cloud ещё соответствующий package.json

app.post('/size2json', async (req, res) => {
    let image = [];
    var busboy = new Busboy({ headers: req.headers });
    busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
      console.log('File [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype);
      file.on('data', function(data) {
        if (fieldname === 'image') {
            image.push(data);
        }
      });
      file.on('end', function() {
        console.log('File [' + fieldname + '] Finished');
      });
    });
    busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
      console.log('Field [' + fieldname + ']: value: ' + inspect(val));
    });
    busboy.on('finish', function() {
      const dimensions = sizeOf(Buffer.concat(image));
      console.log(dimensions);    
      res.setHeader('Content-Type', 'application/json');
      res.json({width: dimensions.width, height: dimensions.height});
    });
    req.pipe(busboy);
});

module.exports.handler = async (event, context) => {
    const patchedEvent = {
        ...event,
        path:   ( event.url.lastIndexOf('?') === event.url.length - 1 ) ? event.url.substring(0, event.url.length-1) : event.url  ,
        originalPath: event.path,
    }
    return serverless(app)(patchedEvent, context);
};