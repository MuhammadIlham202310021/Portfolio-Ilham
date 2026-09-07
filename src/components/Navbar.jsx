import { Link } from "react-scroll";
import { useLang } from "../context/LangContext";
import { t } from "../data/Translations"

const Navbar = () => {
  const { lang, toggleLang } = useLang();

  return (
    <nav className="items-center justify-between py-8 mb-0 ">
      <div className="menu flex lg:flex-wrap justify-center bg-transparent lg:border-2 border-neutral-600 relative p-5 mx-64 text-xl">
        <Link
          to="Experience"
          smooth={true}
          duration={500}
          className="px-5 cursor-pointer hover:text-purple-500"
        >
          {t[lang].nav_experience}
        </Link>
        <Link
          to="Projects"
          smooth={true}
          duration={500}
          className="px-5 cursor-pointer hover:text-purple-500"
        >
          {t[lang].nav_projects}
        </Link>
        <Link
          to="Technologies"
          smooth={true}
          duration={500}
          className="px-5 cursor-pointer hover:text-purple-500"
        >
          {t[lang].nav_technologies}
        </Link>
        <Link
          to="Contact"
          smooth={true}
          duration={500}
          className="px-5 cursor-pointer hover:text-purple-500"
        >
          {t[lang].nav_contact}
        </Link>

        {/* Tombol toggle bahasa */}
        <button
          onClick={toggleLang}
          className="px-5 cursor-pointer hover:text-purple-500 border-l border-neutral-600 ml-3 pl-5 text-base font-medium tracking-wide"
        >
          {lang === "id" ? "🇬🇧 EN" : "🇮🇩 ID"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
