import React, { useState, useEffect } from "react";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaWordpress, FaFigma, 
  FaGithub, FaBootstrap, FaSass, FaTrello, FaReact, FaNodeJs 
} from "react-icons/fa";
import { SiNetlify, SiTailwindcss, SiVite, SiPrettier, SiEslint, SiJest, SiCypress, SiNotion, SiStyledcomponents } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";


/**
 * The Skills component renders a list of tech stack icons and their names.
 * The colors of the icons alternate between their original color and a dark custom color every 5 seconds.
 */
function Skills() {
  const [iconColors, setIconColors] = useState({
    html: "text-orange-500",
    css: "text-blue-500",
    js: "text-yellow-500",
    react: "text-blue-400",
    node: "text-green-700",
    wordpress: "text-blue-600",
    figma: "text-orange-500",
    github: "text-gray-300",
    vscode: "text-sky-400",
    netlify: "text-teal-400",
    bootstrap: "text-purple-600",
    tailwind: "text-blue-600",
    api: "text-white",
    sass: "text-pink-500",
    prettier: "text-yellow-400",
    styled: "text-pink-400",
    eslint: "text-indigo-800",
    trello: "text-blue-500",
    notion: "text-gray-600",
    vite: "text-yellow-500",
    jest: "text-red-900",
    cypress: "text-green-600"
  });

  /**
   * Effect hook to toggle icon colors every 5 seconds.
   * Colors alternate between original colors and a custom dark color.
   */
  useEffect(() => {
    const colorInterval = setInterval(() => {
      setIconColors((prevColors) => {
        const newColors = Object.keys(prevColors).reduce((acc, key) => {
          acc[key] = prevColors[key] === "text-custom-medium" ? getOriginalColor(key) : "text-custom-medium";
          return acc;
        }, {});

        return newColors;
      });
    }, 5000); // 5 seconds interval for color change

    return () => clearInterval(colorInterval); // Cleanup interval on component unmount
  }, []);

  /**
   * Returns the original color for each icon based on the icon key.
   * @param {string} key - The key for the icon (e.g., "html", "css").
   * @returns {string} - The original color for the icon.
   */
  const getOriginalColor = (key) => {
    const originalColors = {
      html: "text-orange-500",
      css: "text-blue-500",
      js: "text-yellow-500",
      react: "text-blue-400",
      node: "text-green-700",
      wordpress: "text-blue-600",
      figma: "text-orange-500",
      github: "text-gray-300",
      vscode: "text-sky-400",
      netlify: "text-teal-400",
      bootstrap: "text-purple-600",
      tailwind: "text-blue-600",
      api: "text-white",
      sass: "text-pink-500",
      prettier: "text-yellow-400",
      styled: "text-pink-400",
      eslint: "text-indigo-800",
      trello: "text-blue-500",
      notion: "text-gray-600",
      vite: "text-yellow-500",
      jest: "text-red-900",
      cypress: "text-green-600"
    };
    return originalColors[key];
  };

  return (
    <div id="skills" className="h-screen flex flex-col items-center justify-center text-white pt-[150px] mt-[150px] sm:mt-0 md:pt-0">
      <h2
        className="mb-10 text-7xl md:text-8xl text-white tracking-wider font-allison font-bold text-center pt-[60px]"
        style={{ textShadow: "5px 8px 4px #6E5D5D" }}
      >
        Tech Stack
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 lg:gap-x-12 text-center items-center pt-[60px]">
        <SkillCard icon={<FaHtml5 className={iconColors.html} />} name="HTML" />
        <SkillCard icon={<FaCss3Alt className={iconColors.css} />} name="CSS" />
        <SkillCard icon={<FaJs className={iconColors.js} />} name="JavaScript" />
        <SkillCard icon={<FaReact className={iconColors.react} />} name="React" />
        <SkillCard icon={<FaNodeJs className={iconColors.node} />} name="NodeJs" />
        <SkillCard icon={<SiVite className={iconColors.vite} />} name="Vite" />
        <SkillCard icon={<VscVscodeInsiders className={iconColors.vscode} />} name="VSCode" />
        <SkillCard icon={<FaGithub className={iconColors.github} />} name="GitHub" />
        <SkillCard icon={<SiNetlify className={iconColors.netlify} />} name="Netlify" />
        <SkillCard icon={<FaBootstrap className={iconColors.bootstrap} />} name="Bootstrap" />
        <SkillCard icon={<SiTailwindcss className={iconColors.tailwind} />} name="Tailwind" />
        <SkillCard icon={<TbApi className={iconColors.api} />} name="API" />
        <SkillCard icon={<FaWordpress className={iconColors.wordpress} />} name="WordPress" />
        <SkillCard icon={<FaFigma className={iconColors.figma} />} name="Figma" />
        <SkillCard icon={<FaSass className={iconColors.sass} />} name="SASS" />
        <SkillCard icon={<SiPrettier className={iconColors.prettier} />} name="Prettier" />
        <SkillCard icon={<SiStyledcomponents className={iconColors.styled} />} name="StyledC." />
        <SkillCard icon={<SiEslint className={iconColors.eslint} />} name="EsLint" />
        <SkillCard icon={<FaTrello className={iconColors.trello} />} name="Trello" />
        <SkillCard icon={<SiNotion className={iconColors.notion} />} name="Notion" />
        <SkillCard icon={<SiJest className={iconColors.jest} />} name="Jest" />
        <SkillCard icon={<SiCypress className={iconColors.cypress} />} name="Cypress" />
      </div>
    </div>
  );
}

/**
 * SkillCard component renders an individual skill card with an icon and a name.
 * @param {object} props - The component props.
 * @param {JSX.Element} props.icon - The icon to display.
 * @param {string} props.name - The name of the technology.
 * @returns {JSX.Element} - A rendered skill card.
 */
const SkillCard = ({ icon, name }) => {
  return (
    <div className="flex flex-col items-center space-y-2 transition-all duration-300">
      <div className="text-6xl">{icon}</div>
      <p className="text-base font-lora font-semibold text-white">{name}</p>
    </div>
  );
};

export default Skills;
