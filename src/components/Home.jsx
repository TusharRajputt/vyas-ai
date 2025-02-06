import React, { useRef, useEffect } from "react";

import Navbar from "./Navbar";

const Home = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let balls = [];

    const mouse = {
      x: null,
      y: null,
    };

    // Function to calculate distance between two points
    const distance = (x1, y1, x2, y2) => {
      const xDist = x2 - x1;
      const yDist = y2 - y1;
      return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
    };

    // Function to create a new ball
    const createBall = (x, y, radius, color, velocity) => {
      return {
        x,
        y,
        radius,
        color,
        velocity,
      };
    };

    // Function to draw a ball
    const drawBall = (ball) => {
      context.beginPath();
      context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      context.fillStyle = ball.color;
      context.fill();
      context.closePath();
    };

    // Function to update the position of each ball
    const update = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      balls.forEach((ball) => {
        // Calculate distance between ball and mouse
        const dist = distance(mouse.x, mouse.y, ball.x, ball.y);

        // Repel the ball if the cursor is close
        if (dist < 30) {
          const angle = Math.atan2(mouse.y - ball.y, mouse.x - ball.x);
          ball.velocity.x = -Math.cos(angle) * 5;
          ball.velocity.y = -Math.sin(angle) * 5;
        }

        // Update position
        ball.x += ball.velocity.x;
        ball.y += ball.velocity.y;

        // Bounce off walls
        if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
          ball.velocity.x = -ball.velocity.x;
        }
        if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
          ball.velocity.y = -ball.velocity.y;
        }

        // Draw the ball
        drawBall(ball);
      });

      requestAnimationFrame(update);
    };

    // Create and add initial balls
    for (let i = 0; i < 100; i++) {
      const radius = Math.random() * 5 + 5; // Smaller radius
      const x = Math.random() * (canvas.width - 2 * radius) + radius;
      const y = Math.random() * (canvas.height - 2 * radius) + radius;
      const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      })`;
      const velocity = {
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2,
      };
      balls.push(createBall(x, y, radius, color, velocity));
    }

    // Mouse move event listener
    const handleMouseMove = (event) => {
      mouse.x = event.clientX - canvas.getBoundingClientRect().left;
      mouse.y = event.clientY - canvas.getBoundingClientRect().top;
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    // Start the animation loop
    update();

    // Cleanup function
    return () => {
      cancelAnimationFrame(update);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <Navbar />

      <div className="h-screen w-screen overflow-hidden relative">
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0"
          width={window.innerWidth}
          height={window.innerHeight}
        />
        <div className="flex justify-center items-center h-full">
          <h1 className="text-[#00df9a] font-bold text-2xl">Coming Soon...</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
