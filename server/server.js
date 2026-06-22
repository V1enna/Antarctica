import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import characterRouter from './routes/characterRouter.js';

dotenv.config();

const app = express();
const port = 4000;
const router = express.Router();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// routes
app.use('/api/characters', characterRouter);

// connect to mongodb via mongoose
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // server listener
    app.listen(process.env.port, () => {
      console.log(`Blud is connected and app listening at port`, process.env.PORT);
    });
  })

  .catch((error) => {
    console.log(error);
  }
);

