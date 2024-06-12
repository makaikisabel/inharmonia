"use client";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import album1 from "@/public/images/albums_album1.jpg";
import album2 from "@/public/images/albums_album2.jpg";
import spoty from "@/public/assets/spotify_48.svg";
import tube from "@/public/assets/youtube_48.svg";

export default function Albums() {

  const { t } = useTranslation();

  const albums = {
    album1: {
      name: "kábítószerelem",
      image: album1,
      albumDescription: [
        t('album1_text1'),
        t('album1_text2'),
        t('album1_text3'),
      ],
      youtube: {
        href: "https://www.youtube.com/watch?v=mKlRjWu4LQo&list=PL52kxOgTohFvMzt9JBKUpPLq5BLmQOdv6&pp=iAQB",
        src: tube,
        width: 40,
        height: 40,
      },
      spotify: {
        href: "https://open.spotify.com/album/7I11wb5ENs77tgxDsR41j9",
        src: spoty,
        width: 35,
        height: 35,
      },
    },
    album2: {
      name: "önszabotázs",
      image: album2,
      albumDescription: [
        t('album2_text1'),
        t('album2_text2'),
        t('album2_text3'),
      ],
      youtube: {
        href: "https://www.youtube.com/watch?v=gRs1rKDGn64&list=PL52kxOgTohFvF33amyd-XxT9---849Mcu&ab_channel=Inharm%C3%B3niaOfficial",
        src: tube,
        width: 40,
        height: 40,
      },
      spotify: {
        href: "https://open.spotify.com/album/2nHuavIQ2Z3GR18hk41h7w",
        src: spoty,
        width: 35,
        height: 35,
      },
    },
  };
  
  return (
    <>
      <section
        id="albums"
        className="flex justify-center bg-cover-albums bg-cover text-white py-16"
      >
        <div className="mx-10 md:mx-12 lg:max-w-screen-xl">
          <h1 className="md:text-left text-5xl p-2 uppercase">
            {t("menu_albumok")}
          </h1>
          {Object.values(albums).map((album, index) => (
            <div
              key={index}
              className={` flex flex-col items-center rounded-2xl w-full ${
                index === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } md:max-w-screen-2xl md:max-h-max h-auto  theme-red2 mb-8`}
            >
              <Image
                className="p-8 object-cover w-full h-full  md:h-auto md:w-92 lg:h-auto lg:w-80"
                src={album.image}
                alt={album.name}
              />
              <div className="flex flex-col justify-between p-5 leading-normal">
                <h1
                  className={`mb-10 text-4xl  tracking-tight text-white uppercase ${
                    index === 0 ? "text-right" : "text-left"
                  }`}
                >
                  {album.name}
                </h1>
                {album.albumDescription.map((description, index) => (
                  <p key={index} className="mt-2">
                    {description}
                  </p>
                ))}

                <div className="flex flex-row justify-center mt-3">
                  <div className="mx-5">
                    <a href={album.youtube.href} target="_blank">
                      <Image
                        src={album.youtube.src}
                        alt="youtube"
                        width={album.youtube.width}
                        height={album.youtube.height}
                        className="hover:-translate-1 trans hover:scale-150 scale hover: duration-300"
                      />
                    </a>
                  </div>
                  <div className="mx-5">
                    <a href={album.spotify.href} target="_blank">
                      <Image
                        src={album.spotify.src}
                        alt="spotify"
                        width={album.spotify.width}
                        height={album.spotify.height}
                        className="hover:-translate-1 trans hover:scale-150 scale hover: duration-300"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
