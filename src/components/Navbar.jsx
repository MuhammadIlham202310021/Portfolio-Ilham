import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <nav className="items-center justify-between py-8 mb-0">
      <div className="menu flex flex-wrap justify-center bg-transparent border-2 border-neutral-600 relative p-5 mx-64 text-xl">
        <Link
          to="About"
          smooth={true}
          duration={500}
          className="px-5 cursor-pointer hover:text-purple-500"
        >
          About
        </Link>
        <Link
          to="Experience"
          smooth={true}
          duration={500}
          className="px-5 cursor-pointer hover:text-purple-500"
        >
          Experience
        </Link>
        <Link
          to="Projects"
          smooth={true}
          duration={500}
          className="px-5 cursor-pointer hover:text-purple-500"
        >
          Project
        </Link>
        <Link
          to="Technologies"
          smooth={true}
          duration={500}
          className="px-5 cursor-pointer hover:text-purple-500"
        >
          Technologies
        </Link>
        <Link
          to="Contact"
          smooth={true}
          duration={500}
          className="px-5 cursor-pointer hover:text-purple-500"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
