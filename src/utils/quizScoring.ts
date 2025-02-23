import { PlanetType } from './analytics';
import { planetData } from './planetData';
import { config } from '../lib/config';

const GEMINI_API_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

interface GeminiResponse {
  candidates: {
    content: {
      parts: {
        text: string;
      }[];
    };
  }[];
}

interface AnalysisResult {
  planet: PlanetType;
  confidence: number;
  reasoning: string;
}

async function callGemini(answers: string[]): Promise<PlanetType> {
  const systemPrompt = `You are an AI that analyzes friendship dynamics based on quiz answers. 
Your task is to match the friendship description to the most fitting "Friend Planet" type.

Available planet types and their characteristics:
${Object.entries(planetData)
  .map(([type, data]) => 
    `- ${type}: ${data.title}
     Description: ${data.description}
     Traits: ${data.traits.join(', ')}`)
  .join('\n\n')}

IMPORTANT: Return ONLY a valid JSON object (no markdown, no backticks) with these exact fields:
{
  "planet": "planet_type",
  "confidence": number between 0 and 1,
  "reasoning": "brief explanation of why this planet type matches"
}

Focus on emotional patterns, communication style, relationship depth, and friendship dynamics in your analysis.`;

  const userPrompt = `Here are the answers to the friendship quiz questions:

1. In what settings do you usually interact with this friend, and how much does your friendship rely on those specific contexts?
Answer: ${answers[0]}

2. How would you describe the emotional depth of your interactions?
Answer: ${answers[1]}

3. How frequently do you connect with this friend, and through which means?
Answer: ${answers[2]}

4. Are your interactions and plans with this friend spontaneous or planned?
Answer: ${answers[3]}

5. How does this friendship challenge you to grow or push you out of your comfort zone?
Answer: ${answers[4]}

6. How do you feel this friendship is like?
Answer: ${answers[5]}

7. Where do you see this friendship in five years?
Answer: ${answers[6]}

Analyze these answers and provide a JSON response with the planet type, confidence level, and reasoning.`;

  try {
    const response = await fetch(`${GEMINI_API_ENDPOINT}?key=${config.googleApiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: systemPrompt + "\n\n" + userPrompt
          }]
        }]
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Response Status:', response.status);
      console.error('API Error Response:', errorText);
      throw new Error(`API call failed with status ${response.status}: ${errorText}`);
    }

    const data: GeminiResponse = await response.json();
    
    if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
      throw new Error('Invalid response format from Gemini');
    }

    try {
      // Clean the response text by removing any markdown formatting
      const cleanText = data.candidates[0].content.parts[0].text
        .replace(/```json/g, '')
        .replace(/```/g, '')
        .trim();

      const result: AnalysisResult = JSON.parse(cleanText);
      
      // Validate that the returned planet type exists in our data
      if (!planetData[result.planet]) {
        console.error('Invalid planet type returned:', result.planet);
        return 'earth';
      }

      console.log('Analysis Result:', result);
      return result.planet;
    } catch (parseError) {
      console.error('Error parsing Gemini response:', parseError);
      console.error('Raw response:', data.candidates[0].content.parts[0].text);
      return 'earth';
    }

  } catch (error) {
    console.error('Error calling Gemini:', error);
    return 'earth';
  }
}

export async function calculatePlanetType(answers: string[]): Promise<PlanetType> {
  if (!answers || !Array.isArray(answers) || answers.length === 0) {
    console.error('Invalid answers provided to calculatePlanetType:', answers);
    return 'earth';
  }

  try {
    return await callGemini(answers);
  } catch (error) {
    console.error('Error calculating planet type:', error);
    return 'earth';
  }
} 