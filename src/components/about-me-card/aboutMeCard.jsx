import { useLanguage } from "../../contexts/languageContext";

export default function AboutMeCard() {
  const { translate } = useLanguage();
  return (
    <div className=" text-mediumBlack dark:text-white">
      <div className="inline-block mt-12">
        <p className="font-playfair text-2xl text-pink font-bold">
          {translate("aboutMe")}
        </p>
      </div>

      <p className="mb-9!"> {translate("aboutMeText")} </p>
    </div>
  );
}
