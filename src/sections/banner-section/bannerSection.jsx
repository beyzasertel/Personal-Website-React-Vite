import BannerCard from "../../components/banner-card/bannerCard";
import IconButton from "../../components/icon-button/iconButton";
import { useLanguage } from "../../contexts/languageContext";

export default function BannerSection() {
  const { translate } = useLanguage();

  const links = [
    {
      link: "https://www.linkedin.com/in/beyza-can-sertel/",
      text: "linkedin",
      icon: "src/assets/images/logos/linkedin-logo-black.svg",
      darkThemeIcon: "src/assets/images/logos/linkedin-logo-gray.svg",
    },
    {
      link: "https://github.com/beyzasertel",
      text: "github",
      icon: "src/assets/images/logos/github-logo-black.svg",
      darkThemeIcon: "src/assets/images/logos/github-logo-gray.svg",
    },
  ];

  return (
    <div className=" bg-softGray dark:bg-darkGray relative pb-12">
      <div className="container flex flex-col-reverse md:flex-row items-center justify-between gap-4 md:gap-3 pt-6 md:pt-12 pb-8">
        <div className="text-mediumBlack dark:text-white  ">
          <div className="relative ">
            <img
              src="src/assets/images/elements/pink-rectangle.svg"
              alt="pink-rectangle"
              className="absolute top-12 md:top-17 left-[-5px] z-0 h-2 md:h-6"
            />
            <div className="relative z-10 mt-12 md:mt-0">
              <p className="text-sm md:text-xl"> {translate("hi")}! 👋</p>
              <p className="font-bold text-sm md:text-4xl leading-[20px] md:leading-[50px]">
                {translate("title")}
              </p>
            </div>
          </div>
        </div>

        <div>
          <BannerCard />
        </div>
      </div>

      <div className="container">
        <div className="flex items-center gap-2">
          {links.map((link) => {
            return (
              <IconButton
                key={link.text}
                link={link.link}
                icon={link.icon}
                darkThemeIcon={link.darkThemeIcon}
                text={link.text}
              />
            );
          })}
        </div>
      </div>

      <div className="absolute right-0 bottom-[10px] md:bottom-[22px] w-12 md:w-22">
        <img
          src="src/assets/images/elements/rounded-pink-rectangle.svg"
          alt="pink-rounded-rectangle"
          className="absolute z-10"
        />
      </div>
    </div>
  );
}
