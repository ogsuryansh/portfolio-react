import React from "react";

const techStack = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Python"
];

function About() {
  return (
    <section id="about" className="about">
      <div className="about-left">
        <div className="image-border-wrapper">
          <img src="/assets/images/dp.jpg" alt="Suryansh" className="about-img" />
          <span className="spark-line"></span>
        </div>
      </div>
      <div className="about-right">
        <h2>About Me</h2>
        <p>
          Hey, I’m <span className="highlight">Suryansh</span> — a full-stack
          developer from India who’s really into crafting clean, interactive
          websites. I love turning ideas into polished, responsive experiences
          with thoughtful code and a strong eye for design.
        </p>
        <div className="skills">
          <h3>Tech Stack</h3>
          <ul className="skill-tags">
            {techStack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;