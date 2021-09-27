const BSON = require('bson');

// Serialize a document
const doc = {a: true};
const data = BSON.serialize(doc);

console.log('data: ', data, ' size: ', BSON.calculateObjectSize(doc))