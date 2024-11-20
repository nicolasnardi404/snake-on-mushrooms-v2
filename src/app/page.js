import SnakeGame from "../../components/SnakeGame";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 text-white">SNAKE ON MUSHROOMS</h1>
      <SnakeGame />
    </div>
  );
}
