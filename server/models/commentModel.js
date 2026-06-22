import mongoose from "mongoose";

// function to create a character schema
const Schema = mongoose.Schema;

// creates a new schema
// defines the structure of the documents in the collection, and the data types of each field
const commentSchema = new Schema({
    name: { //id: 'maria-ashinov',
        type: String,
        required: true
    },
    
    name: { //id: 'maria-ashinov',
        type: String,
        required: true
    },


}, {timestamps: true});

// creates a new model based on the schema
const Comment = mongoose.model('Comment', commentSchema);