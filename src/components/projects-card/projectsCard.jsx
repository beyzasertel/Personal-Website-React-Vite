import { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";
import PillButton from "../pill-button/pillButton";
import { useLanguage } from "../../contexts/languageContext";

export default function ProjectsCard({
  title,
  text,
  buttons,
  gitHubLink,

  bgColor,
  bgColorDark,
}) {
  const [theme] = useContext(ThemeContext);

  const { translate } = useLanguage();

  return (
    <div
      className={`
    ${theme === "dark" && bgColorDark === "lightBlack" ? "bg-lightBlack" : ""}
    ${theme === "dark" && bgColorDark === "darkGreen" ? "bg-darkGreen" : ""}
    ${theme !== "dark" && bgColor === "lightBlue" ? "bg-lightBlue" : ""}
    ${theme !== "dark" && bgColor === "lightGreen" ? "bg-lightGreen" : ""}
    relative p-8 mb-12 rounded-4
  `}
    >
      <div className="">
        <p className="font-playfair text-3xl mb-2 text-black dark:text-white!">
          {title}
        </p>
        <p className="mb-4 text-black dark:text-white!">
          <p className="mb-4 text-black dark:text-white!">{translate(text)}</p>
        </p>

        <div className="flex flex-wrap w-96 mb-4 gap-2">
          {buttons.map((button) => (
            <PillButton key={button.title} title={button.title} />
          ))}
        </div>

        <div className="w-full flex flex-col md:flex-row items-center md:justify-between py-4">
          <a
            href={gitHubLink}
            className="no-underline! text-black dark:text-white! font-bold"
          >
            View on Github
          </a>
        </div>
      </div>
    </div>
  );
}
