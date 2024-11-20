export function initGame(canvas, ctx, callbacks) {
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  const gridSize = isMobile ? 25 : 35;
  let snake = [{ x: 5, y: 5 }];
  let mushroom = { x: 7, y: 7 };
  let direction = { x: 0, y: 0 };
  let score = 0;
  let effectLevel = 0;
  let gameOver = false;
  let lastUpdateTime = 0;

  function resizeCanvas() {
    const maxWidth = isMobile ? window.innerWidth - 20 : 800;
    const maxHeight = isMobile ? window.innerHeight * 0.6 : 600;
    canvas.width = Math.floor(maxWidth / gridSize) * gridSize;
    canvas.height = Math.floor(maxHeight / gridSize) * gridSize;
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // Copy your existing game logic here, but modify these parts:
  // 1. Remove global variables
  // 2. Use the callbacks parameter for score updates
  // 3. Use the canvas and ctx parameters instead of getting them from document
  // 4. Export cleanup function

  function gameLoop(timestamp) {
    if (!gameOver) {
      if (timestamp - lastUpdateTime > 100) {
        update();
        draw();
        lastUpdateTime = timestamp;
      }
      requestAnimationFrame(gameLoop);
    }
  }

  function cleanup() {
    window.removeEventListener("resize", resizeCanvas);
    // Add any other cleanup needed
    gameOver = true;
  }

  // Start the game
  requestAnimationFrame(gameLoop);

  // Return cleanup function
  return {
    cleanup,
  };
}
