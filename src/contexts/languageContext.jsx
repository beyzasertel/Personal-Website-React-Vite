import { createContext, useState, useContext } from "react";
import languageData from "../assets/languageData.js";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("tr");

  const switchLanguage = (lang) => setLanguage(lang);

  const translate = (key) => {
    return key.split(".").reduce((obj, k) => obj?.[k], languageData[language]);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        switchLanguage,
        translate,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
