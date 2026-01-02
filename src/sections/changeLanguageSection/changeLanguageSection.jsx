import { useContext } from "react";
import { useLanguage } from "../../contexts/languageContext";
import { ThemeContext } from "../../contexts/themeContext";

export default function ChangeLanguageSection() {
  const { switchLanguage, language, translate } = useLanguage();
  const [theme] = useContext(ThemeContext);

  return (
    <div className="flex text-lightGray text-[10px] md:text-xs">
      <p className="m-0">
        {theme === "dark" ? translate("mode.dark") : translate("mode.light")}
      </p>

      <span className="bg-lightGray w-px h-3 mx-1 md:mx-2 mt-0.5 "></span>
      <p className="m-0">
        <button
          className="text-pink"
          onClick={() => switchLanguage(language === "tr" ? "en" : "tr")}
        >
          {translate("language")}
        </button>
        {translate("changeLanguage")}
      </p>
    </div>
  );
}
