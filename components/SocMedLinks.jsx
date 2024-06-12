"use client";
import Image from "next/image";
import face from "@/public/assets/facebook_48.svg";
import spoty from "@/public/assets/spotify_48.svg";
import insta from "@/public/assets/instagram_48.svg";
import tube from "@/public/assets/youtube_48.svg";



export default function SocMedLinks({ closeMenu }) {

  const media = {
    youtube: [
      {
        href: "https://www.youtube.com/@inharmoniaofficial3117",
        src: tube,
        width: 40,
        height: 40,
      },
    ],
    spotify: [
      {
        href: "https://open.spotify.com/artist/6ohxXifjiADDc9tSwSgVde",
        src: spoty,
        width: 35,
        height: 35,
      },
    ],
    facebook: [
      {
        href: "https://www.facebook.com/inharmoniazenekar",
        src: face,
        width: 35,
        height: 35,
      },
    ],
    instagram: [
      {
        href: "https://www.instagram.com/inharmoniaofficial/",
        src: insta,
        width: 40,
        height: 40,
      },
    ],
  };

  return (
    <>
      {Object.keys(media).map((i) => (
        <div key={i} className=" gap-2 mr-1 mt-2 items-center">
          {media[i].map((item, index) => (
            <a key={index} href={item.href} target="_blank" onClick={closeMenu}>
              <div>
                <Image
                  src={item.src}
                  className="hover:-translate-1 trans hover:scale-150 scale hover: duration-300"
                  alt={i}
                  width={item.width}
                  height={item.height}
                />
              </div>
            </a>
          ))}
        </div>
      ))}
    </>
  );
}
