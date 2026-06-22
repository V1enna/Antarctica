import express from 'express';
import Character from '../models/characterModel.js';
const app = express();

const router = express.Router();

// express
app.get('/', (req, res) => {
  res.json({mssg: 'Take all Workouts'});
});

// routes
router.get('/workouts', (req, res) => {
    res.json({mssg: 'Take one Workouts'});
});


// post new character
router.post('/', async (req, res) => {
    const {id, name, quote, alias, image, race, classType, gender, affiliation, description} = req.body;
    try{
        const character = await Character.create({id, name, quote, alias, image, race, classType, gender, affiliation, description});
        res.status(200).json(character); //status just to confirm that its okay
        res.json({mssg: 'post new Character'});
    } catch (error) {
        res.status(400).json({error: error.message}); //status to say that an error occurred
        console.log(error);
    }
});

// delete workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'delete Workout'});
});

// update workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'update Workout'});
});


export default router;