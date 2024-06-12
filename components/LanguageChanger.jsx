"use client";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const huLang = (
    <span className="text-4xl text-white">
      <strong className="underline">HU</strong>/EN
    </span>
  );
  const enLang = (
    <span className="text-4xl text-white">
      HU/<strong className="underline">EN</strong>
    </span>
  );

  const toggleLanguage = () => {
    const newLocale = currentLocale === "en" ? "hu" : "en"; // Toggle between 'hu' and 'en'

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <button
      onClick={toggleLanguage}
      title="change language"
      className="mr-3 ml-3 items-center SIL"
    >
      {currentLocale === "en" ? enLang : huLang}
    </button>
  );
}
