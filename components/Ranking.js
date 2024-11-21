"use client";

import { useEffect, useState } from "react";
import styles from "../styles/Ranking.module.css";

export default function Ranking() {
  const [scores, setScores] = useState([]);
  const [activeTab, setActiveTab] = useState("all"); // 'all' or 'monthly'

  useEffect(() => {
    fetchScores(activeTab);
  }, [activeTab]);

  const fetchScores = (type) => {
    const endpoint = type === "monthly" ? "/api/scores/monthly" : "/api/scores";
    fetch(endpoint)
      .then((res) => res.json())
      .then(setScores)
      .catch((error) => console.error("Error fetching scores:", error));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className={styles.rankingContainer}>
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${
            activeTab === "all" ? styles.activeTab : ""
          }`}
          onClick={() => setActiveTab("all")}
        >
          All Time
        </button>
        <button
          className={`${styles.tab} ${
            activeTab === "monthly" ? styles.activeTab : ""
          }`}
          onClick={() => setActiveTab("monthly")}
        >
          Monthly
        </button>
      </div>

      <div className={styles.rankingList}>
        <div className={styles.rankingHeader}>
          <span className={styles.headerRank}>Rank</span>
          <span className={styles.headerName}>Player</span>
          <span className={styles.headerScore}>Score</span>
          <span className={styles.headerDate}>Date</span>
        </div>

        {scores.map((score, index) => (
          <div
            key={score.id}
            className={styles.rankingItem}
            style={{ "--index": index }}
          >
            <div className={styles.rank}>
              {index === 0 && "🥇"}
              {index === 1 && "🥈"}
              {index === 2 && "🥉"}
              {index > 2 && `#${index + 1}`}
            </div>
            <div className={styles.playerInfo}>
              <span className={styles.playerName}>{score.name}</span>
              <span className={styles.score}>{score.score} pts</span>
              <span className={styles.date}>{formatDate(score.createdAt)}</span>
            </div>
          </div>
        ))}

        {scores.length === 0 && (
          <div className={styles.noScores}>
            No high scores yet. Be the first to play!
          </div>
        )}
      </div>
    </div>
  );
}
