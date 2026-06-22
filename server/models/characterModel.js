import mongoose from "mongoose";

// function to create a character schema
const Schema = mongoose.Schema;

// creates a new schema
// defines the structure of the documents in the collection, and the data types of each field
const characterSchema = new Schema({
    id: { //id: 'maria-ashinov',
        type: String,
        required: true
    },
    name: { //name: "Maria Ashinov",
        type: String,
        required: true
    },
    quote: { //quote: "It's what God wills.",
        type: String,
        required: true
    },
    alias: { //alias: "Venus of Iscariot",
        type: String,
        required: true
    },
    image: { //image: "/Antarctica/images/Maria.png",
        type: String, // should store the path to the image file, idk if it should be a string
        required: true
    },
    race: { //race: "Human",
        type: String,
        required: true
    },
    classType: { //class: "Exorcist",
        type: String,
        required: true
    },
    gender: { //gender: "Female",
        type: String,
        required: true
    },
    affiliation: { //affiliation: "Iscariot Organization",
        type: String,
        required: true
    },
    description: { //description: ""
        type: String,
        required: true
    }
}, {timestamps: true});

// creates a new model based on the schema
const Character = mongoose.model('Character', characterSchema);