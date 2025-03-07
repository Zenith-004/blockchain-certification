import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

// Load environment variables from .env
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Define a test route
app.get("/", (req, res) => {
    res.send("🚀 Server is running successfully!");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Server started at http://localhost:${PORT}`);
});
console.log("MongoDB URI:", process.env.MONGO_URI);
export default app;
