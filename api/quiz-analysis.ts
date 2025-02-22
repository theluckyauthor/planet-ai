import { VercelRequest, VercelResponse } from '@vercel/node';
import { calculatePlanetType } from '../src/utils/quizScoring';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { answers } = request.body;
    
    const planetType = await calculatePlanetType(answers);
    return response.status(200).json({ planetType });
  } catch (error) {
    console.error('Error:', error);
    return response.status(500).json({ error: 'Failed to analyze answers' });
  }
} 