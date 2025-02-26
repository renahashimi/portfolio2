import { 
  FaHtml5, FaCss3Alt, FaJs, FaWordpress, FaFigma, 
  FaGithub, FaBootstrap, FaSass, FaTrello, FaReact 
} from "react-icons/fa";
import { SiNetlify, SiTailwindcss, SiVite } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";

function Skills() {
  return (
    <div id="skills" className="flex flex-col items-center justify-center text-white mt-[100px]">
      <div className="relative h-16 w-full mb-6 border-t-4 border-b-2 border-pink-600">
      <img src="/back3.jpg" alt="Background" className="w-full h-full object-cover" />
        <h2 className="absolute inset-0 flex items-center justify-end pe-6 text-3xl md:text-4xl tracking-widest font-play font-bold uppercase text-center bg-black bg-opacity-10 text-custom-light">
          My Tech Stack
        </h2>
      </div>
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
