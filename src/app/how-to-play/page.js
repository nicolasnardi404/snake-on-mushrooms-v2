export default function HowToPlayPage() {
  return (
    <div className="min-h-screen px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">
          How to Play
        </h1>
        <div className="bg-purple-900/50 p-8 rounded-lg backdrop-blur-sm border border-white/10">
          <ul className="space-y-4 text-white text-lg">
            <li>🎮 Use arrow keys to control the snake</li>
            <li>🍄 Collect mushrooms to grow and trip</li>
            <li>🌈 Each mushroom increases your psychedelic level</li>
            <li>💀 Don't hit the walls or yourself</li>
            <li>🏆 Try to get the highest score!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
