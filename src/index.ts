import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Express API is running' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Service is healthy' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

export default app;
