import React, { useRef, useState, useEffect } from "react";

const projects = [
  {
    title: "examfusion",
    desc: "Responsive student portal with payment integration",
    video: "/assets/videos/examfusion .mp4",
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
  },
  {
    title: "Tic-Tac-Toe",
    desc: "A very famous game Tic Tac Toe",
    video: "/assets/videos/tic tac toe.mp4",
    tech: ["JavaScript", "CSS", "HTML"],
  },
  {
    title: "Acadmix",
    desc: "A education website includes payment integration",
    video: "/assets/videos/acadmix.mp4",
    tech: ["JavaScript", "Node.js"],
  },
];

function WorkSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(window.innerWidth <= 768 ? 1 : 2);
  const autoTimer = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(window.innerWidth <= 768 ? 1 : 2);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = projects.length - visibleCount;

  useEffect(() => {
    startAuto();
    return () => clearInterval(autoTimer.current);
    // eslint-disable-next-line
  }, [currentIndex, visibleCount]);

  const startAuto = () => {
    clearInterval(autoTimer.current);
    autoTimer.current = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 5000);
  };

  const goToSlide = (idx) => {
    if (idx < 0) idx = maxIndex;
    else if (idx > maxIndex) idx = 0;
    setCurrentIndex(idx);
  };

  const pauseAuto = () => clearInterval(autoTimer.current);
  const resumeAuto = () => startAuto();

  const slideWidth = 100 / visibleCount;

  return (
    <section id="work" className="work-slider">
      <h2 className="section-title">My Past Work</h2>
      <button className="slider-btn prev" onClick={() => goToSlide(currentIndex - 1)}>
        &lt;
      </button>
      <div
        className="slider-window"
        onMouseEnter={pauseAuto}
        onMouseLeave={resumeAuto}
        onTouchStart={pauseAuto}
        onTouchEnd={resumeAuto}
      >
        <div
          className="slider-track"
          style={{
            display: "flex",
            gap: "30px",
            transition: "transform 0.5s",
            transform: `translateX(-${currentIndex * (slideWidth + 0.3)}%)`,
          }}
        >
          {projects.map((project) => (
            <div
              className="slide-card"
              key={project.title}
              style={{
                minWidth: `${slideWidth}%`,
                width: `${slideWidth}%`,
              }}
            >
              <video
                className="project-video"
                src={project.video}
                autoPlay
                muted
                loop
                playsInline
              ></video>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <ul className="card-tech">
                {project.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <button className="slider-btn next" onClick={() => goToSlide(currentIndex + 1)}>
        &gt;
      </button>
      <div className="slider-dots">
        {projects.map((_, i) => (
          <span
            key={i}
            className={`dot${i === currentIndex ? " active" : ""}`}
            onClick={() => goToSlide(i)}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default WorkSlider;