'use strict'

// const mongoose = require('mongoose');
const mongoose = require('mongoose');

const URI = 'mongodb+srv://devmaster:devmaster@cluster0.hvtee6f.mongodb.net/api_contas?retryWrites=true&w=majority';

let db;

module.exports = {
    connect: async () => {
        db = await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

    },
    getDB: () => {
        return db;
    },
};