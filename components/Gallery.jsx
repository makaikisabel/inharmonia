"use client";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Image from "next/image";
import g1 from "@/public/images/gallery_image1.jpg";
import g2 from "@/public/images/gallery_image2.jpg";
import g3 from "@/public/images/gallery_image3.jpg";
import g4 from "@/public/images/gallery_image4.jpg";
import g5 from "@/public/images/gallery_image5.jpg";
import g6 from "@/public/images/gallery_image6.jpg";
import g7 from "@/public/images/gallery_image7.jpg";
import g8 from "@/public/images/gallery_image8.jpg";
import g9 from "@/public/images/gallery_image9.jpg";

import arrowLeft from "@/public/assets/arrowLeft.svg";
import arrowRight from "@/public/assets/arrowRight.svg";

const galleryPictures = [g1, g2, g3,g4,g5,g6,g7,g8,g9];
const a = "https://icons8.com/icon/set/arrows/ios-filled";

export default function Gallery() {
  const { t } = useTranslation();
  const galleryDetails = <p>{t('gallery_Details')}</p>


  const [imageIndex, setImageIndex] = useState(0);

  const showPrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) return galleryPictures.length - 1;
      return index - 1;
    });
  };

  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === galleryPictures.length - 1) return 0;
      return index + 1;
    });
  };

  return (
    <>
      <section
        id="gallery"
        className="flex justify-center theme-dark text-white py-16 w-full max-w-full"
      >
        <div className="mx-10 md:mx-12 lg:max-w-screen-xl">
          <h1 className="md:text-left text-5xl p-2 uppercase">
            {t("menu_galeria")}
          </h1>
          {galleryDetails}

          <div className="aspect-[10/6] w-full mt-auto">
            <div className="w-[100%] h-[100%] relative lg:w-full lg:h-10/12 ">
              <Image
                src={galleryPictures[imageIndex]}
                className=" object-cover w-full h-full block"
                alt="gallery"
              />
              <button onClick={showNextImage} className="img-slider-btn left-0">
                <Image
                  src={arrowLeft}
                  alt="arrowLeftIcon"
                  className="transition ease-in-out delay-150    duration-300"
                />
              </button>
              <button
                onClick={showPrevImage}
                className="img-slider-btn right-0"
              >
                <Image
                  src={arrowRight}
                  alt="arrowRightIcon"
                  className="transition ease-in-out delay-150   duration-300"
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
