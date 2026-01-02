import { useLanguage } from "../../contexts/languageContext";

export default function AboutMeCard() {
  const { translate } = useLanguage();
  return (
    <div className=" text-mediumBlack dark:text-white">
      <div className="relative inline-block">
        <p className="font-playfair text-2xl relative z-999">
          {translate("aboutMe")}
        </p>
        <img
          src="src/assets/images/elements/blue-short-rectangle.svg"
          alt="blue-rectangle"
          className="absolute top-4"
        />
      </div>

      <p className="mb-9!"> {translate("aboutMeText")} </p>
    </div>
  );
}
