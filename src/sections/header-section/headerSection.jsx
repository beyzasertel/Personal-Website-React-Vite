import { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";
import ChangeThemeSection from "../change-theme-section/changeThemeSection";
import ChangeLanguageSection from "../changeLanguageSection/changeLanguageSection";

export default function HeaderSection() {
  const [theme] = useContext(ThemeContext);

  return (
    <>
      <div className="bg-softGray dark:bg-darkGray h-10 md:h-20">
        <div className="container relative">
          <img
            className="absolute top-0 left-[10%] md:left-[10%] h-6 md:h-16"
            src={
              theme === "dark"
                ? "/images/elements/half-dark-gray-circle.svg"
                : "/images/elements/half-light-gray-circle.svg"
            }
          />
          <div className="flex items-center w-full absolute left-[30%] md:left-[64%]">
            <ChangeThemeSection />
            <ChangeLanguageSection />
          </div>
        </div>
      </div>
    </>
  );
}
