"use client";

import { useState } from "react";
import styles from "../styles/HighScoreModal.module.css";

export default function HighScoreModal({ score, onSubmit, onClose }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit(name.trim());
      setName("");
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2>Game Over!</h2>
        <p>Your Score: {score}</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            maxLength={20}
            className={styles.input}
            autoFocus
          />
          <div className={styles.buttons}>
            <button
              type="submit"
              disabled={!name.trim()}
              className={styles.submitButton}
            >
              Submit Score
            </button>
            <button
              type="button"
              onClick={onClose}
              className={styles.closeButton}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
