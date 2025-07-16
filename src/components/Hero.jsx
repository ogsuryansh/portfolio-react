import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

function Hero() {
  const typedRef = useRef(null);
  const cubeRef = useRef(null);

  // Typed.js effect
  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "a Full Stack Developer",
        "a MERN Stack Expert",
        "a Freelancer",
        "a Problem Solver"
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  // Cube drag/rotate effect
  useEffect(() => {
    const cube = cubeRef.current;
    let rotateX = 20, rotateY = 20;
    let isDragging = false, lastX = 0, lastY = 0;
    let autoRotate = true;

    // Set initial transform
    cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    // Mouse events
    const onMouseDown = (e) => {
      isDragging = true;
      autoRotate = false;
      lastX = e.clientX;
      lastY = e.clientY;
      document.body.style.cursor = "grabbing";
      e.preventDefault();
    };
    const onMouseMove = (e) => {
      if (!isDragging) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      rotateY += dx * 0.2; // slower drag
      rotateX -= dy * 0.2;
      rotateX = Math.max(-90, Math.min(90, rotateX));
      cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      lastX = e.clientX;
      lastY = e.clientY;
    };
    const onMouseUp = () => {
      if (isDragging) {
        isDragging = false;
        autoRotate = true;
        document.body.style.cursor = "default";
      }
    };

    // Touch events
    const onTouchStart = (e) => {
      isDragging = true;
      autoRotate = false;
      lastX = e.touches[0].clientX;
      lastY = e.touches[0].clientY;
      e.preventDefault();
    };
    const onTouchMove = (e) => {
      if (!isDragging) return;
      const touch = e.touches[0];
      const dx = touch.clientX - lastX;
      const dy = touch.clientY - lastY;
      rotateY += dx * 0.2; // slower drag
      rotateX -= dy * 0.2;
      rotateX = Math.max(-90, Math.min(90, rotateX));
      cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      lastX = touch.clientX;
      lastY = touch.clientY;
    };
    const onTouchEnd = () => {
      if (isDragging) {
        isDragging = false;
        autoRotate = true;
      }
    };

    // Auto-rotate
    let animationFrame;
    function animateCube() {
      if (autoRotate && !isDragging) {
        rotateX += 0.05; // slower auto-rotate
        rotateY += 0.15;
        cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
      animationFrame = requestAnimationFrame(animateCube);
    }
    animateCube();

    // Add event listeners
    cube.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    cube.addEventListener("touchstart", onTouchStart, { passive: false });
    cube.addEventListener("touchmove", onTouchMove, { passive: false });
    cube.addEventListener("touchend", onTouchEnd);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrame);
      cube.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);

      cube.removeEventListener("touchstart", onTouchStart);
      cube.removeEventListener("touchmove", onTouchMove);
      cube.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <div className="cube-container" title="Drag me">
          <div className="cube" ref={cubeRef}>
            <div className="face front">
              <img src="/assets/images/html.png" alt="HTML" />
              <span>HTML</span>
            </div>
            <div className="face back">
              <img src="/assets/images/css.png" alt="CSS" />
              <span>CSS</span>
            </div>
            <div className="face left">
              <img src="/assets/images/js.png" alt="JavaScript" />
              <span>JavaScript</span>
            </div>
            <div className="face right">
              <img src="/assets/images/python.png" alt="Python" />
              <span>Python</span>
            </div>
            <div className="face top">
              <img src="/assets/images/react.png" alt="React" />
              <span>React</span>
            </div>
            <div className="face bottom">
              <img src="/assets/images/nodejs.png" alt="Node.js" />
              <span>Node.js</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <h1>
          Hi, I'm <span className="highlight">Suryansh</span>
        </h1>
        <h2>
          I am <span ref={typedRef}></span>
        </h2>
        <a href="#services" className="scroll-down">
          ↓ Explore More
        </a>
      </div>
    </section>
  );
}

export default Hero;