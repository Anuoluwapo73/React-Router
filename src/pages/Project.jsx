import React from "react";
import recipe from "../assets/desktop-design.jpg";
import rating from "../assets/rating.jpg";
import calc from "../assets/calc.png";
import color from "../assets/color.png";
import samp from "../assets/samp.png";
import ProjectCard from "../components/ProjectCard";

const projectContent = [
  {
    title: "Recipe Page",
    description:
      "A step-by-step recipe page dedicated to making the perfect omelette, featuring clear instructions, a list of required ingredients, preparation tips, and visuals for guidance. The page is designed to be beginner-friendly while also offering variations for those who want to experiment with flavors and fillings.",
    image: recipe,
    gitLink: "https://github.com/Anuoluwapo73/Recipe_Page",
    liveSite: "https://anuoluwapo73.github.io/Recipe_Page/",
  },
  {
    title: "Rating Component",
    description:
      "A versatile rating component that allows users to provide feedback or express preferences by selecting from a range . It supports both interactive input for collecting ratings and static display for showcasing average scores. Fully customizable in appearance and behavior, this component is ideal for reviews, product evaluations, or any feature that requires user-based scoring.",
    image: rating ,
    gitLink: "https://github.com/Anuoluwapo73/Rating-Comp",
    liveSite: "https://anuoluwapo73.github.io/Rating-Comp/",
  },
  {
    title: "Calculator Sample",
    description:
      "A functional calculator component designed to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. It features a clean interface with responsive buttons, real-time input display, and accurate result computation, making it suitable for quick calculations within any application.",
    image: calc,
    gitLink: "https://github.com/Anuoluwapo73/Calc_Sample",
    liveSite: "https://anuoluwapo73.github.io/Calc_Sample/",
  },
  {
    title: "Color Changer",
    description:
      "A simple yet interactive color toggler component that enables users to switch between different background or theme colors with a single click. It provides a smooth and dynamic visual experience, offering customization options for predefined palettes or custom themes, making it useful for personalization and accessibility in modern applications.",
    image: color,
    gitLink: "https://github.com/Anuoluwapo73/DOM2",
    liveSite: "https://dom-2-two.vercel.app/",
  },
  {
    title: "Sample Website",
    description:
      "A modern and responsive website that combines clean design with intuitive navigation. It features interactive elements, dynamic content, and a user-friendly interface tailored to provide an engaging browsing experience. Built with performance and accessibility in mind, the website adapts seamlessly across devices, offering both functionality and aesthetics.",
    image: samp,
    gitLink: "https://github.com/Anuoluwapo73/Astra",
    liveSite: "https://anuoluwapo73.github.io/Astra/",
  },
];
const Project = () => {
  return (
    <div className="project">
      {projectContent.map((item, index) => (
        <ProjectCard key={index} feature={item} />
      ))}
    </div>
  );
};

export default Project;
