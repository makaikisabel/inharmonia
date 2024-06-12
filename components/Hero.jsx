"use client";
import { useTranslation } from "react-i18next";


export default function Hero() {
  const { t } = useTranslation();

  return (
    <div id="hero" className="">
      <div className=" relative bg-cover-intro bg-cover bg-center w-full h-80 mt-[5%] md:w-full md:h-screen md:bg-top md:mt-[3%] lg:mt-[1%]">
        <div className="">
          <div className=" absolute  top-[50%] lg:top-[50%] px-5 lg:px-72 2xl:px-[25%]">
            <h1 className="text-center uppercase text-xl md:text-4xl text-white drop-shadow-xl">
             
            {t('hero_text1')}
            </h1>
            <h1 className="text-center text-white uppercase text-2xl">
            {t('hero_text2')}
            </h1>
            <h1 className="text-center text-white uppercase text-2xl">
            {t('hero_text3')}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
