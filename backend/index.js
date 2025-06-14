import express from 'express';
import dotenv from 'dotenv';

import { connectDB } from './db/connectDB.js';

import authRoutes from './routes/auth.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Middleware to parse JSON bodies

app.use("/api/auth", authRoutes);

app.listen(5000, () => {
  connectDB();
  console.log('Server is running on http://localhost:5000', PORT);
});