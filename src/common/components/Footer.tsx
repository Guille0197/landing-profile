import LanguageSelector from "./LanguageSelector";

const Footer = () => {
  return (
    <div className="flex items-center justify-between">
      <span className="block text-sm text-gray-500 sm:text-left dark:text-gray-400">
        © {new Date().getFullYear()}
        <a href="#" className="hover:underline ml-2">
          Guillermo Navarro
        </a>
      </span>
      <LanguageSelector />
    </div>
  );
};

export default Footer;
