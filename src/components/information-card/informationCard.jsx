import { useLanguage } from "../../contexts/languageContext";

export default function InformationCard() {
  const { translate } = useLanguage();

  return (
    <div className="relative w-full">
      <div className="bg-mediumGray/50 rounded-4 absolute inset-0 translate-x-2 translate-y-2"></div>

      <div className="bg-white dark:bg-mediumGray! rounded-4 relative py-8 px-4 w-full h-auto">
        <p className="font-playfair text-pink text-xl mb-4">
          {translate("basicInformation")}
        </p>

        <div className="grid grid-cols-2 gap-y-3 text-mediumBlack dark:text-white">
          <span className="font-semibold">{translate("dateOfBirth")}</span>
          <span>26.08.1998</span>

          <span className="font-semibold">{translate("cityOfResidence")}</span>
          <span>İstanbul</span>

          <span className="font-semibold">{translate("education")}</span>
          <span>
            {translate("university")}
            <br /> {translate("bachelor")}, 2020
          </span>

          <span className="font-semibold">{translate("preferredRole")}</span>
          <span>Frontend Developer, Backend Developer</span>
        </div>
      </div>
    </div>
  );
}
