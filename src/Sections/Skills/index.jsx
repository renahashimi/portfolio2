import { 
  FaHtml5, FaCss3Alt, FaJs, FaWordpress, FaFigma, 
  FaGithub, FaBootstrap, FaSass, FaTrello, FaReact 
} from "react-icons/fa";
import { SiNetlify, SiTailwindcss, SiVite, SiNotion } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";

function Skills() {
  return (
    <div id="skills" className="flex flex-col items-center justify-center text-white">
      <h2 className="mb-10 text-3xl md:text-5xl text-custom-light tracking-wider font-play font-bold uppercase text-center">Skills</h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 text-center">
        <SkillCard icon={<FaHtml5 className="hover:text-orange-500" />} name="HTML" />
        <SkillCard icon={<FaCss3Alt className="hover:text-blue-500" />} name="CSS" />
        <SkillCard icon={<FaJs className="hover:text-yellow-500" />} name="JavaScript" />
        <SkillCard icon={<FaReact className="hover:text-blue-400" />} name="React" />
        <SkillCard icon={<FaWordpress className="hover:text-blue-600" />} name="WordPress" />
        <SkillCard icon={<FaFigma className="hover:text-pink-400" />} name="Figma" />
        <SkillCard icon={<FaGithub className="hover:text-gray-300" />} name="GitHub" />
        <SkillCard icon={<VscVscodeInsiders className="hover:text-blue-500" />} name="VSCode" />
        <SkillCard icon={<SiNetlify className="hover:text-green-400" />} name="Netlify" />
        <SkillCard icon={<FaBootstrap className="hover:text-purple-600" />} name="Bootstrap" />
        <SkillCard icon={<SiTailwindcss className="hover:text-blue-600" />} name="Tailwind" />
        <SkillCard icon={<FaSass className="hover:text-pink-500" />} name="SASS" />
        <SkillCard icon={<FaTrello className="hover:text-blue-500" />} name="Trello" />
        <SkillCard icon={<SiNotion className="hover:text-gray-500" />} name="Notion" />
        <SkillCard icon={<SiVite className="hover:text-yellow-500" />} name="Vite" />
      </div>
    </div>
  );
}

const SkillCard = ({ icon, name }) => {
  return (
    <div className="flex flex-col items-center space-y-2  text-custom-dark transition-all duration-300">
      <div className="text-6xl">{icon}</div>
      <p className="text-base font-lora font-semibold text-white">{name}</p>
    </div>
  );
};

export default Skills;
