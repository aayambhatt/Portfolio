import { Home, User, Folder, Mail, CodeXml } from "lucide-react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-lg fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        <a className="btn btn-ghost text-xl flex items-center gap-2">
          <Home className="w-6 h-6" /> My Portfolio
        </a>
        <div className="flex gap-4">
          <a href="#about" className="btn btn-ghost flex items-center gap-2">
            <User className="w-5 h-5" /> About
          </a>
          <a href="#projects" className="btn btn-ghost flex items-center gap-2">
            <Folder className="w-5 h-5" /> Projects
          </a>
          <a href="#skills" className="btn btn-ghost flex items-center gap-2">
            <CodeXml className="w-5 h-5" /> Skills
          </a>
          <a href="#contact" className="btn btn-ghost flex items-center gap-2">
            <Mail className="w-5 h-5" /> Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

