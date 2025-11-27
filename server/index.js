// SMTP server removed - now using EmailJS for form submissions
// This file is kept for potential future use
// If you don't need this server, you can delete this file and the server folder

import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running (EmailJS is used for emails)' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
  console.log(`Note: EmailJS is used for form submissions, not this server`);
});

