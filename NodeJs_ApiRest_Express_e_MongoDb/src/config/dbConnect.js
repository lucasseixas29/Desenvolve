import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://lucasseixas29:luislucas123@cluster0.3tpxg6y.mongodb.net/Alura-Node");

let db = mongoose.connection;

export default db;