import Ranking from "../../../components/Ranking";

export default function RankingsPage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 text-white">Rankings</h1>
      <Ranking />
    </div>
  );
}
