import { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";

export default function IconButton({ text, icon, darkThemeIcon, link }) {
  const [theme] = useContext(ThemeContext);
  return (
    <a href={link}>
      <img
        src={theme === "dark" ? darkThemeIcon : icon}
        alt={text}
        className="w-8 h-8 md:h-12 md:w-12"
      />
    </a>
  );
}
