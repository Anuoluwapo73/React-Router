import React from "react";

function ProjectCard({ feature }) {
  return (
    <div className="project-card">
      <img src={feature.image} />
      <h1>{feature.title}</h1>
      <p>{feature.description}</p>
      <span>
        <button>
          <a href={feature.gitLink}>Git Repo</a>
        </button>
        <button>
          <a href={feature.liveSite}>Live Demo</a>
        </button>
      </span>
    </div>
  );
}

export default ProjectCard;
