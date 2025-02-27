import { 
  FaHtml5, FaCss3Alt, FaJs, FaWordpress, FaFigma, 
  FaGithub, FaBootstrap, FaSass, FaTrello, FaReact 
} from "react-icons/fa";
import { SiNetlify, SiTailwindcss, SiVite } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";

function Skills() {
  return (
    <div id="skills" className="h-screen flex flex-col items-center justify-center text-white">
      <h2
        className="mb-10 text-7xl md:text-8xl text-white tracking-wider font-allison font-bold text-center pt-[60px]"
        style={{ textShadow: "5px 8px 6px #6E5D5D" }}
      >
        My Tech Stack
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-6 lg:gap-x-12 text-center items-center pt-[60px]">
        <SkillCard icon={<FaHtml5 className="text-orange-500" />} name="HTML" />
        <SkillCard icon={<FaCss3Alt className="text-blue-500" />} name="CSS" />
        <SkillCard icon={<FaJs className="text-yellow-500" />} name="JavaScript" />
        <SkillCard icon={<FaReact className="text-blue-400" />} name="React" />
        <SkillCard icon={<FaWordpress className="text-blue-600" />} name="WordPress" />
        <SkillCard icon={<FaFigma className="text-pink-400" />} name="Figma" />
        <SkillCard icon={<FaGithub className="text-gray-300" />} name="GitHub" />
        <SkillCard icon={<VscVscodeInsiders className="text-blue-500" />} name="VSCode" />
        <SkillCard icon={<SiNetlify className="text-green-400" />} name="Netlify" />
        <SkillCard icon={<FaBootstrap className="text-purple-600" />} name="Bootstrap" />
        <SkillCard icon={<SiTailwindcss className="text-blue-600" />} name="Tailwind" />
        <SkillCard icon={<FaSass className="text-pink-500" />} name="SASS" />
        <SkillCard icon={<FaTrello className="text-blue-500" />} name="Trello" />
        <SkillCard icon={<SiVite className="text-yellow-500" />} name="Vite" />
      </div>
    </div>
  );
}

const SkillCard = ({ icon, name }) => {
  return (
    <div className="flex flex-col items-center space-y-2 transition-all duration-300">
      <div className="text-6xl">{icon}</div>
      <p className="text-base font-lora font-semibold text-white">{name}</p>
    </div>
  );
};

export default Skills;
