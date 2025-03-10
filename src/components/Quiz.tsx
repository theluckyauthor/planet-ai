import { useState, useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { trackQuizStart, trackQuizCompletion } from "@/utils/analytics";
import { toast } from "@/components/ui/use-toast";
import React from "react";
import { calculatePlanetType } from '@/utils/quizScoring';

const questions = [
  {
    question: "In what settings do you usually interact with this friend, and how much does your friendship rely on those specific contexts?",
    placeholder: "Class, club, dorm, or events—and does your connection change outside these settings?"
  },
  {
    question: "How would you describe the emotional depth of your interactions?",
    placeholder: "Do you share personal stories and vulnerabilities, or is it more lighthearted and casual?"
  },
  {
    question: "How frequently do you connect with this friend, and through which means?",
    placeholder: "Daily texts, weekly calls, occasional meetups, or sporadic check-ins?"
  },
  {
    question: "Are your interactions and plans with this friend spontaneous or planned?",
    placeholder: "Do you decide on the fly, or are meetings scheduled well in advance?"
  },
  {
    question: "How does this friendship challenge you to grow or push you out of your comfort zone?",
    placeholder: "Does your friend inspire you to try new things, offer constructive feedback, or motivate you to change?"
  },
  {
    question: "How do you feel this friendship is like?",
    placeholder: "Describe the overall vibe or character of your connection..."
  },
  {
    question: "Where do you see this friendship in five years?",
    placeholder: "Growing stronger, naturally evolving, or perhaps fading over time?"
  }
];

function generateUID(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

export const Quiz = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(""));
  
  // Get data from URL if it exists (for direct comparison)
  const encodedData = searchParams.get('data');
  
  // Check if the quiz is from a comparison route
  const isComparisonQuiz = location.state?.originalResult;
  
  useEffect(() => {
    if (encodedData) {
      try {
        const comparisonData = JSON.parse(atob(encodedData));
        // Set up the quiz state for comparison
        const quizState = {
          name: "", // Will be filled by user
          friendName: comparisonData.n,
          originalResult: {
            n: comparisonData.n,
            fn: comparisonData.fn,
            pt: comparisonData.pt,
            d: comparisonData.d
          }
        };
        // If we don't have a state yet, set it up
        if (!location.state) {
          navigate("", { state: quizState, replace: true });
        }
      } catch (error) {
        console.error("Failed to parse comparison data", error);
        navigate("/");
      }
    }
  }, [encodedData, navigate, location.state]);

  // Start tracking when quiz begins
  useEffect(() => {
    trackQuizStart();
  }, []);
  
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  const handleNext = async () => {
    if (!answers[currentQuestion].trim()) {
      toast({
        title: "Please provide an answer",
        description: "Share your thoughts before moving forward",
        variant: "destructive"
      });
      return;
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Show loading state
      toast({
        title: "Analyzing your friendship...",
        description: "Please wait while we process your answers",
      });

      try {
        // Call calculatePlanetType directly
        const planetType = await calculatePlanetType(answers);
        
        trackQuizCompletion(planetType);
        const resultId = generateUID();

        if (location.state?.originalResult) {
          navigate("/compare-results", {
            state: {
              resultId,
              name: location.state.originalResult.fn,
              friendName: location.state.originalResult.n,
              planetType,
              answers,
              comparisonResult: {
                name: location.state.originalResult.n,
                friendName: location.state.originalResult.fn,
                planetType: location.state.originalResult.pt,
                answers: location.state.originalResult.d
              }
            }
          });
        } else {
          navigate("/result", {
            state: {
              resultId,
              name: location.state.name,
              friendName: location.state.friendName,
              planetType,
              answers
            }
          });
        }
      } catch (error) {
        console.error('Error processing quiz:', error);
        toast({
          title: "Something went wrong",
          description: "Please try again later",
          variant: "destructive"
        });
      }
    }
  };

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-purple-900 to-black">
      <Card className="w-full max-w-2xl p-8 space-y-8 bg-black/30 backdrop-blur-lg border-white/10">
        {isComparisonQuiz && (
          <div className="text-center mb-4">
            <h2 className="text-xl font-bold text-white">
              {location.state.originalResult.n} has invited you, {location.state.originalResult.fn}, to take this friendship quiz!
            </h2>
          </div>
        )}

        <div className="space-y-4">
          <Progress 
            value={progress} 
            className="w-full bg-white/10"
          />
          <p className="text-sm text-white/70 text-center">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-center text-white">
            {currentQ.question}
          </h2>
          
          <div className="flex flex-col items-center justify-center w-full">
            <Textarea
              placeholder={currentQ.placeholder}
              value={answers[currentQuestion]}
              onChange={(e) => handleAnswer(e.target.value)}
              className="min-h-[150px] w-full max-w-lg bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:ring-white/30 focus:border-white/30"
            />
          </div>

          <Button
            onClick={handleNext}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 transition-opacity"
            disabled={!answers[currentQuestion].trim()}
          >
            {currentQuestion < questions.length - 1 ? "Next Question" : "Complete Quiz"}
          </Button>
        </div>
      </Card>
    </div>
  );
};
