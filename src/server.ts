import express from 'express';
import { calculatePlanetType } from './utils/quizScoring.js';
import { planetData } from './utils/planetData.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/quiz-analysis', async (req, res) => {
  try {
    const { answers } = req.body;
    
    // Validate answers
    if (!Array.isArray(answers) || answers.length === 0) {
      return res.status(400).json({ error: 'Invalid answers format' });
    }

    // Use our existing calculatePlanetType function
    const planetType = await calculatePlanetType(answers);
    
    // Get the planet data for the result
    const result = {
      planetType,
      planetInfo: planetData[planetType]
    };

    res.json(result);
  } catch (error) {
    console.error('Error processing quiz:', error);
    res.status(500).json({ error: 'Failed to analyze answers' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
}); 