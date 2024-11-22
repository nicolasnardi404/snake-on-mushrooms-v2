import styles from "../../../styles/HowToPlay.module.css";

export default function HowToPlayPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>How to Play</h1>
        <div className={styles.instructionsCard}>
          <ul className={styles.instructionsList}>
            <li>🎮 Use arrow keys to control the snake</li>
            <li>🍄 Collect mushrooms to grow and trip</li>
            <li>🌈 Each mushroom increases your psychedelic level</li>
            <li>💀 Don't hit the walls or yourself</li>
            <li>🏆 Try to get the highest score!</li>
            <li className={styles.disclaimer}>
              ⚠️ Remember: Only digital snakes can eat this amount of mushrooms!
              Don't try this at home 🐍
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
