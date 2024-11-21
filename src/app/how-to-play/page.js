export default function HowToPlayPage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 text-white">How to Play</h1>
      <div className="bg-purple-900/50 p-6 rounded-lg max-w-md">
        <ul className="space-y-4 text-white">
          <li>🎮 Use arrow keys to control the snake</li>
          <li>🍄 Collect mushrooms to grow and trip</li>
          <li>🌈 Each mushroom increases your psychedelic level</li>
          <li>💀 Don't hit the walls or yourself</li>
          <li>🏆 Try to get the highest score!</li>
        </ul>
      </div>
    </div>
  );
}
