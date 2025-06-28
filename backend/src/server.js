import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import rateLimiter from './middleware/rateLimiter.js';
dotenv.config();
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5001;

// middleware
app.use(
  cors({
    origin: 'http://localhost:5173',
  })
);
app.use(express.json());
app.use(rateLimiter);


// routes
app.use('/api/notes', notesRoutes);

// connection to DB
connectDB().then(() => {
  // create server
  app.listen(5001, () => {
    console.log(`Server started on PORT: ${PORT}`);
  });
});
