import AboutMeCard from "../../components/about-me-card/aboutMeCard";
import InformationCard from "../../components/information-card/informationCard";
import { useLanguage } from "../../contexts/languageContext";

export default function ProfileSection() {
  const { translate } = useLanguage();

  return (
    <div className="bg-softGray dark:bg-darkGray relative">
      <img
        src="src/assets/images/elements/half-pink-circle.svg"
        alt="pink-circle"
        className="absolute top-[-25px] md:top-[-50px] right-0 h-12 md:h-24"
      />
      <div className="container py-22">
        <p className="text-center text-mediumBlack dark:text-white text-3xl md:text-5xl md:pb-12">
          {translate("profile")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InformationCard />
          <AboutMeCard />
        </div>
      </div>
    </div>
  );
}
