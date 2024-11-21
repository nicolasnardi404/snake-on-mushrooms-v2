import Ranking from "../../../components/Ranking";
import styles from "../../../styles/Ranking.module.css";

export default function RankingsPage() {
  return (
    <div
      className="min-h-screen px-4"
      style={{ backgroundColor: "rgb(255, 76, 76)" }}
    >
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">
          🍄 Best Mushroom Eaters 🍄
        </h1>
        <div className="bg-black/20 p-8 rounded-lg backdrop-blur-sm">
          <Ranking />
        </div>
      </div>
    </div>
  );
}
