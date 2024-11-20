"use client";

import { useEffect, useState } from "react";

export default function Ranking() {
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchScores() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("/api/scores");
        if (!response.ok) throw new Error("Failed to fetch scores");
        const data = await response.json();
        setScores(data);
      } catch (error) {
        console.error("Error fetching scores:", error);
        setError("Failed to load scores. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchScores();
    const interval = setInterval(fetchScores, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="mt-8 w-full max-w-md bg-purple-900/50 rounded-lg p-4">
        <div className="animate-pulse space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-8 bg-purple-800/50 rounded" />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-8 w-full max-w-md bg-red-900/50 rounded-lg p-4 text-red-200">
        {error}
      </div>
    );
  }

  return (
    <div className="mt-8 w-full max-w-md bg-purple-900/50 rounded-lg p-4">
      <h2 className="text-2xl font-bold mb-4 text-white">Top Scores</h2>
      {scores.length === 0 ? (
        <p className="text-purple-200">No scores yet. Be the first!</p>
      ) : (
        <div className="space-y-2">
          {scores.map((score, index) => (
            <div
              key={score.id}
              className="flex justify-between items-center border-b border-purple-700 py-2"
            >
              <div className="flex items-center gap-4">
                <span className="text-purple-300 w-8">#{index + 1}</span>
                <span className="text-white">{score.name}</span>
              </div>
              <span className="text-orange-400 font-bold">
                {score.score.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
