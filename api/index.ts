// Vercel Serverless Function
import express from 'express';

const app = express();
app.use(express.json());

// Set up health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'API is working on Vercel' });
});

export default app;