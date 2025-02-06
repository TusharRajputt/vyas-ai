import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const NetworkBackground = () => {
  const canvasRef = React.createRef();

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
    const nodeCount = 30; // Reduced node count
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


const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNotifyMeClick = () => {
    // Replace with your EmailJS service ID, template ID, and user ID
    const SERVICE_ID = 'service_k9ksl91';
    const TEMPLATE_ID = 'template_uq8qsnr';
    const USER_ID = 'EknKUDu0TTLV5UZGD';
  
    const templateParams = {
      to_email: email,
    };
  
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then((response) => {
        console.log('Email sent successfully:', response);
        // Show a success message or popup
        alert('Email sent successfully! Thank you for subscribing to our newsletter.');
        // or use a notification library like react-toastify
        // toast.success('Email sent successfully! Thank you for subscribing to our newsletter.');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        // Show an error message or popup
        alert('Error sending email. Please try again later.');
        // or use a notification library like react-toastify
        // toast.error('Error sending email. Please try again later.');
      });
  };

  return (
    <div className="relative overflow-hidden">
      <NetworkBackground />
      <div className="relative z-10">
        <div className="max-w-[1240px] mx-auto px-4 py-16 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 my-4 text-white">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Want tips & tricks to optimize your flow?
            </h1>
            <p>Sign up to our newsletter and stay up to date.</p>
          </div>
          <div className="my-4">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full">
              <input
                className="p-3 flex w-full rounded-md bg-white text-black"
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={handleEmailChange}
              />
              <button
                className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3"
                onClick={handleNotifyMeClick}
              >
                Notify Me
              </button>
            </div>
            <p className="text-white">
              We care about the protection of your data. Read our{" "}
              <Link onClick={scrollToTop} to='/policy' className="text-[#00df9a]">Privacy Policy.</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
