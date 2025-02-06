import React from 'react';
import { useNavigate } from 'react-router-dom';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const Analytics = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    scrollToTop();
    navigate('/login');
  };

  return (
    <div className="relative overflow-hidden">
      <NetworkBackground />
      <div className="relative z-10">
        <div className="max-w-[1240px] mx-auto px-4 py-16 grid md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center mb-8 md:mb-0">
            <img
              className="w-full md:max-w-[300px] filter brightness-100"
              src="https://img.icons8.com/?size=100&id=deD7V7zamJRP&format=png&color=FFFFFF"
              alt="computer icon"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p style={{ color: 'white' }} className="text-[#00df9a] font-bold text-3xl mb-4">DATA SETS</p>
            <h1 style={{ color: 'white' }} className="md:text-5xl sm:text-3xl text-2xl font-bold mb-4">
              Search, curate, and manage visual data
            </h1>
            <p style={{ color: 'white' }} className="mb-4">
              Bring images and video from your own buckets in 40+ annotation and image formats
              via API. <br />
              Filter, tag, segment, preprocess, and augment image data by metadata, train/test
              split, or location of image <br />
              Track multiple versions of datasets for experimentation. <br />
              Use text-based semantic search and CLIP vectors to find similar data and anomalies.
            </p>
            <button
              className="bg-[#00df9a] text-white w-[200px] rounded-md font-medium py-3"
              onClick={handleGetStarted}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const NetworkBackground = () => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Node class and animation logic
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

    // Initialize nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push(new Node());
    }

    // Animation function
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

    // Start animation
    animate();

    // Mouse move event listener
    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default Analytics;
