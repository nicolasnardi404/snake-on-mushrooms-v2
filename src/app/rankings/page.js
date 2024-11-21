import Ranking from "../../../components/Ranking";
import styles from "../../../styles/Ranking.module.css";

export default function RankingsPage() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>🍄 Best Mushroom Eaters 🍄</h1>
          <p className={styles.subtitle}>
            The most epic players who've driven the snake insane by devouring
            waaay too much mushrooms!
          </p>
        </div>

        <div className={styles.rankingContainer}>
          <Ranking />
        </div>
      </div>

      <div className={styles.backgroundElements}>
        <div className={styles.backgroundElement1} />
        <div className={styles.backgroundElement2} />
      </div>
    </div>
  );
}
