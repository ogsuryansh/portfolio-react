import React from "react";
import "./Works.css";

const projects = [
  {
    title: "Acadmix",
    video: "workAssets/acadmix.mp4",
    description:
      "A complete education platform with UPI payment, admin panel & protected PDFs.",
    tech: ["JavaScript", "Node.js", "MongoDB"],
  },
  {
    title: "Tic-Tac-Toe",
    video: "workAssets/tic tac toe.mp4",
    description: "A game developer using logic in JavaScript",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  // Add more projects here as needed
];

const Works = () => (
  <div className="works-root">
    <h1 className="works-head">My Projects</h1>
    <div className="works-projects-wrapper">
      {projects.map((project, idx) => (
        <div className="works-slide-card" key={idx}>
          <video
            className="works-project-video"
            src={project.video}
            autoPlay
            muted
            loop
            playsInline
          ></video>
          <div className="works-slide-card-content">
            <h3 className="works-card-title">{project.title}</h3>
            <p className="works-card-desc">{project.description}</p>
            <ul className="works-card-tech">
              {project.tech.map((t, i) => (
                <li className="works-card-tech-item" key={i}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Works;