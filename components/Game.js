"use client";

import { useState } from "react";
import GameBoard from "./GameBoard";
import ScoreBoard from "./ScoreBoard";
import Ranking from "./Ranking";

export default function Game() {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [effectLevel, setEffectLevel] = useState(0);
  const [currentView, setCurrentView] = useState("menu");

  const renderHeader = () => (
    <nav className="w-full mb-8 bg-purple-900/30 p-4 rounded-lg backdrop-blur-sm">
      <ul className="flex justify-center gap-6">
        <li>
          <button
            onClick={() => setCurrentView("menu")}
            className={`nav-button ${currentView === "menu" ? "active" : ""}`}
          >
            Menu
          </button>
        </li>
        <li>
          <button
            onClick={() => setCurrentView("game")}
            className={`nav-button ${currentView === "game" ? "active" : ""}`}
          >
            Play
          </button>
        </li>
        <li>
          <button
            onClick={() => setCurrentView("ranking")}
            className={`nav-button ${
              currentView === "ranking" ? "active" : ""
            }`}
          >
            Rankings
          </button>
        </li>
        <li>
          <button
            onClick={() => setCurrentView("instructions")}
            className={`nav-button ${
              currentView === "instructions" ? "active" : ""
            }`}
          >
            How to Play
          </button>
        </li>
      </ul>
    </nav>
  );

  const renderView = () => {
    switch (currentView) {
      case "menu":
        return (
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-2xl mb-4">Welcome to Snake on Mushrooms!</h2>
            <button
              onClick={() => setCurrentView("game")}
              className="game-button"
            >
              Start Game
            </button>
            <button
              onClick={() => setCurrentView("ranking")}
              className="game-button"
            >
              View Rankings
            </button>
            <button
              onClick={() => setCurrentView("instructions")}
              className="game-button"
            >
              How to Play
            </button>
          </div>
        );
      case "game":
        return (
          <>
            <ScoreBoard score={score} effectLevel={effectLevel} />
            <GameBoard
              onScoreChange={setScore}
              onGameOver={(finalScore) => {
                setGameOver(true);
                setCurrentView("ranking");
              }}
              onLevelChange={setEffectLevel}
            />
            <button
              onClick={() => setCurrentView("menu")}
              className="game-button mt-4"
            >
              Back to Menu
            </button>
          </>
        );
      case "ranking":
        return (
          <>
            <Ranking />
            <button
              onClick={() => setCurrentView("menu")}
              className="game-button mt-4"
            >
              Back to Menu
            </button>
          </>
        );
      case "instructions":
        return (
          <div className="text-center">
            <div className="bg-purple-900/50 p-6 rounded-lg max-w-md">
              <h2 className="text-2xl mb-4">How to Play</h2>
              <ul className="text-left space-y-2">
                <li>🎮 Use arrow keys to control the snake</li>
                <li>🍄 Collect mushrooms to grow and trip</li>
                <li>🌈 Each mushroom increases your psychedelic level</li>
                <li>💀 Don't hit the walls or yourself</li>
                <li>🏆 Try to get the highest score!</li>
              </ul>
            </div>
            <button
              onClick={() => setCurrentView("menu")}
              className="game-button mt-4"
            >
              Back to Menu
            </button>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-white">SNAKE ON MUSHROOMS</h1>
      {renderHeader()}
      {renderView()}
    </div>
  );
}
