import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Share2, Download, Info } from "lucide-react";
import { PlanetType } from "@/utils/analytics";
import React from "react";
import { toast } from "@/components/ui/use-toast";
import { planetData, rankings } from "@/utils/planetData";
import html2canvas from "html2canvas";

interface ComparisonProps {
  myPlanet: PlanetType;
  friendPlanet?: PlanetType;
  myName: string;
  friendName: string;
  myDescription: string;
  friendDescription?: string;
  confidence?: number;
  reasoning?: string;
}

const RankingBar = ({ value, label }: { value: string; label: string }) => {
  const getWidth = (val: string) => {
    switch (val) {
      case 'high': return 'w-full';
      case 'average': return 'w-2/3';
      case 'low': return 'w-1/3';
      default: return 'w-0';
    }
  };

  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm text-white/80">
        <span>{label}</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full">
        <div className={`h-full bg-white/30 rounded-full ${getWidth(value)}`} />
      </div>
    </div>
  );
};

const PlanetComparison = ({ 
  myPlanet, 
  friendPlanet, 
  myName, 
  friendName, 
  myDescription, 
  friendDescription,
  confidence,
  reasoning 
}: ComparisonProps) => {
  if (!friendPlanet) {
    return null;
  }

  return (
    <div className="space-y-6 text-center">
      <h2 className="text-2xl font-bold text-white">Friendship Dynamic</h2>
      <div className="flex justify-center gap-8">
        <div className="floating">
          <div className="text-6xl mb-2">
            {planetData[myPlanet].emoji}
          </div>
          <p className="text-white mt-2">{myName}</p>
          <p className="text-white/80 italic text-sm mt-2">"{myDescription}"</p>
          {confidence && (
            <p className="text-white/60 text-sm mt-2">
              Confidence: {Math.round(confidence * 100)}%
            </p>
          )}
        </div>
        <div className="floating delay-75">
          <div className="text-6xl mb-2">
            {planetData[friendPlanet].emoji}
          </div>
          <p className="text-white mt-2">{friendName}</p>
          <p className="text-white/80 italic text-sm mt-2">"{friendDescription}"</p>
        </div>
      </div>
      {reasoning && (
        <div className="mt-4 p-4 bg-white/10 rounded-lg">
          <p className="text-white/90 text-sm italic">"{reasoning}"</p>
        </div>
      )}
    </div>
  );
};

export const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { 
    resultId, 
    name, 
    friendName, 
    planetType, 
    description, 
    comparisonResult,
    confidence,
    reasoning
  } = location.state || {};
  const [showShareUrl, setShowShareUrl] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Redirect if missing required data
  useEffect(() => {
    if (!name || !friendName || !planetType) {
      navigate("/");
    }
  }, [name, friendName, planetType, navigate]);

  // Show loading or return null while redirecting
  if (!planetType || !planetData[planetType as keyof typeof planetData]) {
    return null;
  }

  const planetRankings = rankings[planetType as keyof typeof rankings];

  const handleShare = async () => {
    try {
      const shareData = {
        n: name,
        fn: friendName,
        pt: planetType,
        d: description,
        c: confidence,
        r: reasoning
      };

      const encodedData = btoa(JSON.stringify(shareData));
      const shareUrl = `${window.location.origin}/compare?data=${encodedData}`;
      const shareText = `${name} wants to compare your friendship! Take the quiz and see how your views match. 🌟`;
      
      if (navigator.share) {
        await navigator.share({
          title: "Friend Planet Quiz",
          text: shareText,
          url: shareUrl
        });
      } 
    } catch (error) {
      console.error("Sharing failed", error);
    } finally {
      setShowShareUrl(true);
    }
  };

  const handleRetake = () => {
    navigate("/");
  };

  const getCelestialLabel = (planetType: string) => {
    switch (planetType) {
      case 'sun': return 'Your Friendship Star';
      case 'moon': return 'Your Friendship Satellite';
      case 'comet': return 'Your Friendship';
      default: return 'Your Friendship Planet';
    }
  };

  const handleDownloadImage = async () => {
    if (!resultsRef.current) return;

    try {
      toast({
        title: "Creating your cosmic snapshot...",
        description: "Please wait while we capture your results ✨",
      });

      const canvas = await html2canvas(resultsRef.current, {
        backgroundColor: '#6b5b9a',
        scale: 2,
        logging: false,
        useCORS: true,
        allowTaint: true,
      });

      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = `cosmic-friendship-${name}.png`;
      link.click();

      toast({
        title: "Success!",
        description: "Your cosmic friendship snapshot is ready to share! ✨",
      });
    } catch (error) {
      console.error("Screenshot failed:", error);
      toast({
        title: "Oops!",
        description: "Failed to create image. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-purple-900 to-black">
      <Card className="w-full max-w-2xl p-8 space-y-8 bg-black/30 backdrop-blur-lg border-white/10">
        <div ref={resultsRef} className="space-y-8 p-8 rounded-lg">
          <div className="space-y-4 text-center">
            <div className="floating-emoji inline-block">
              <div className="text-8xl mb-4">
                {planetData[planetType].emoji}
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-xl text-white/90">
                {getCelestialLabel(planetType)} is:
              </p>
              <h1 className="text-3xl font-bold text-white">
                {planetType === 'comet' ? 'Comet' : (planetType.charAt(0).toUpperCase() + planetType.slice(1) + ' - ')}
                {planetData[planetType].title}
              </h1>
              {confidence && (
                <p className="text-white/70">
                  Match Confidence: {Math.round(confidence * 100)}%
                </p>
              )}
            </div>
            <p className="text-white/80">
              {name} & {friendName}
            </p>
          </div>

          <p className="text-center text-white/90">
            {planetData[planetType].description}
          </p>

          {reasoning && (
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-center text-white/80 italic">
                "{reasoning}"
              </p>
            </div>
          )}

          <div className="space-y-6">
            <div className="flex flex-wrap gap-2 justify-center">
              {planetData[planetType].traits.map((trait, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full bg-white/20 text-white text-sm"
                >
                  {trait}
                </span>
              ))}
            </div>
            
            <div className="space-y-3">
              <RankingBar value={planetRankings.emotionalDepth} label="Emotional Depth" />
              <RankingBar value={planetRankings.interactionFrequency} label="Interaction Frequency" />
              <RankingBar value={planetRankings.spontaneity} label="Spontaneity" />
              <RankingBar value={planetRankings.contextDependence} label="Context Dependence" />
              <RankingBar value={planetRankings.growthChallenge} label="Growth Challenge" />
            </div>

            <p className="text-center text-white/90 italic">
              💫 {planetData[planetType].nurture}
            </p>
          </div>

          {/* Watermark */}
          <div className="text-center text-white/60 text-sm mt-4">
            https://planety-quiz.vercel.app/ ✨
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button
              onClick={handleShare}
              className="bg-white/20 hover:bg-white/30 text-white"
              variant="outline"
            >
              <Share2 className="mr-2 h-4 w-4" />
              Share & Compare with Friend
            </Button>
            <Button
              onClick={handleDownloadImage}
              className="bg-white/20 hover:bg-white/30 text-white"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Result
            </Button>
            <Button
              onClick={handleRetake}
              className="bg-white/20 hover:bg-white/30 text-white"
            >
              Retake Quiz
            </Button>
          </div>
          
          <div className="text-center mt-4">
            <a
              href="https://forms.gle/f3vUAD96ADCarQjUA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 underline hover:text-white"
            >
              Give us your feedback!
            </a>
          </div>
          
          {showShareUrl && (
            <div className="space-y-2">
              <p className="text-center text-white/80 text-sm">
                Share this link with {friendName} to compare results:
              </p>
              <div 
                className="p-3 bg-black/40 rounded border border-white/20 text-white text-sm break-all cursor-text"
                onClick={(e) => e.currentTarget.select()}
              >
                {`${window.location.origin}/compare?data=${btoa(JSON.stringify({
                  n: name,
                  fn: friendName,
                  pt: planetType,
                  d: description,
                  c: confidence,
                  r: reasoning
                }))}`}
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};