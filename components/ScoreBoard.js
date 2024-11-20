export default function ScoreBoard({ score, effectLevel }) {
  return (
    <div className="flex gap-8 mb-4 text-white">
      <div>Score: {score}</div>
      <div>Level: {effectLevel}</div>
    </div>
  );
}
