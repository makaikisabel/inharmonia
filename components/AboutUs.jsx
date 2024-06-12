"use client";
import { useTranslation } from "react-i18next";
import AboutCard from "./AboutCard";

export default function AboutUs() {
  const { t } = useTranslation();
  
  const song1 = (
    <iframe
      className="rounded-2xl"
      src="https://open.spotify.com/embed/track/4CUt00GKyUWOAp6pkKEGNs?utm_source=generator&theme=0"
      width="100%"
      height={352}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );

  const song2 = ( <iframe
  className="rounded-2xl"
  src="https://open.spotify.com/embed/track/51889HQBPRxHWmAR5z1LHc?utm_source=generator"
  width="100%"
  height={352}
  allowFullScreen=""
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy"
></iframe>
  );

const data = [
      {paragraph: t('aboutUs_text1')},
      {paragraph: t('aboutUs_text2')},
      {paragraph: t('aboutUs_text3')},
      {paragraph: t('aboutUs_text4')},
      {headerText: t('aboutUs_text5')},
      {paragraph: t('aboutUs_text6')},
      {paragraph: t('aboutUs_text7')},
      {headerText: t('aboutUs_text8')},
      {spoty1: song1},
      {paragraph: t('aboutUs_text9')},
      {paragraph: t('aboutUs_text10')},
      {paragraph: t('aboutUs_text11')},
      {paragraph: t('aboutUs_text12')},
      {spoty2: song2},
      {headerText: t('aboutUs_text13')},
      ]

  return (
    <section
      id="aboutus"
      className=" flex justify-center theme-dark text-white py-10"
    >
      <div className="mx-10 md:mx-12 lg:max-w-screen-xl">
        <h1 className="md:text-left text-5xl mt-10 uppercase">
          {t("menu_rolunk")}
        </h1>

<div>
        {data.map((item, index) => (
        <div key={index} className="mb-8">
          {item.headerText && <h1 className="mt-5 mb-0 text-4xl uppercase text-center">{item.headerText}</h1>}
          {item.paragraph && <p className="text-lg">{item.paragraph}</p>}
          {item.spoty1 && <div className="flex justify-center my-10">{song1} </div> 
              ||
           item.spoty2 && <div className="flex justify-center my-10">{song2} </div>}
        </div>
      ))}
    </div>
        <AboutCard />      
        <div>
          <p className="text-center">{t('aboutUs_text14')}</p>
        </div>
      </div>
    </section>
  );
}
