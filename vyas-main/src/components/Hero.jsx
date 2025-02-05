import React from "react";
import {ReactTyped } from "react-typed"; // Correct import
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/main');
  };

  return (
    <div className="relative text-white h-screen overflow-hidden">
      <NetworkBackground />
      <div className="video-overlay absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="flex items-center justify-center h-full z-20 px-4">
        <div className="text-center max-w-[800px] mx-auto content z-30">
          <p className="text-[#00df9a] font-bold p-2 z-30">GROWING WITH VYAS.AI</p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 z-30">
            Grow with AI.
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center z-30">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4 z-30">
              Fast, flexible financing for
            </p>
            <ReactTyped
              className="text-xl md:text-5xl sm:text-4xl font-bold md:pl-4 pl-2 text-gray-500 z-30"
              strings={["MLaaS", "Models", "SaaS"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
          <p className="md:text-2xl text-xl font-bold text-gray-500 z-30">
            Everything you need to build and deploy ML Models
          </p>
          <button 
            className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black z-30"
            onClick={handleGetStarted}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

const NetworkBackground = () => {
  const canvasRef = React.useRef();

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const nodes = [];
    const nodeCount = 30;  // Reduced number of nodes
    const connectionDistance = 150;
    const cursorConnectionDistance = 200;

    let mouse = {
      x: undefined,
      y: undefined
    };

    class Node {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = 2;
        this.speedX = (Math.random() - 0.5) * 2;
        this.speedY = (Math.random() - 0.5) * 2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 255, 255, 0.8)';
        ctx.fill();
      }
    }

    for (let i = 0; i < nodeCount; i++) {
      nodes.push(new Node());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < nodes.length; i++) {
        nodes[i].update();
        nodes[i].draw();

        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(0, 255, 255, ${1 - distance / connectionDistance})`;
            ctx.stroke();
          }
        }

        if (mouse.x && mouse.y) {
          const dx = nodes[i].x - mouse.x;
          const dy = nodes[i].y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < cursorConnectionDistance) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(0, 255, 255, ${1 - distance / cursorConnectionDistance})`;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default Hero;
