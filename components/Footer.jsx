"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/inharmonia_logo.png";
import mail from "@/public/assets/envelope.svg";
import phone from "@/public/assets/phone.svg";
import SocMedLink from "@/components/SocMedLinks";
import amk from "@/public/assets/amk_logo.png";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const Mailto = ({
    email = "makaikisabel@gmail.com",
    subject = "koncert szervezés",
    body = `Kedves Inharmónia`,
    children,
  }) => {
    return (
      <a
        href={`mailto:${email}?subject=${
          encodeURIComponent(subject) || ""
        }&body=${encodeURIComponent(body) || ""}`}
      >
        {children}
      </a>
    );
  };

  return (
    <>
      <footer
        id="footer"
        className="pt-10 pb-2 text-white z-[1]  bg-cover-image bg-cover "
      >
        <div className="flex justify-center  md:justify-around mx-10 md:mx-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-3 gap-4">
              <Image
                src={logo}
                className="object-cover w-full h-auto  md:h-auto md:w-72"
                alt="inharmonia_logo"
              />
              <h5 className=" my-0 text-xl text-center md:text-left uppercase">
                {t("footer_koncertek")}
              </h5>
              <div className="flex items-center justify-center md:justify-start">
                <SocMedLink />
              </div>
            </div>
            <div className="p-3 gap-4 mt-5 ">
              <h1 className="text-5xl md:text-3xl  mb-2 text-center uppercase">
                {t("footer_kapcsolat")}
              </h1>
              <div className="flex justify-center">
                <ul className="">
                  <li>
                    <h1 className=" uppercase text-xl">
                      <Mailto>
                        <Image
                          src={mail}
                          className="inline-block mx-1 text-center"
                          alt="envelope"
                        />
                        info@inharmonia.hu
                      </Mailto>
                    </h1>
                  </li>
                  <li>
                    <Link href={"tel:+36205239292"}>
                      <h1 className="text-3xl text-center">
                        <Image
                          src={phone}
                          className="inline-block mx-1"
                          alt="phone"
                        />
                        +36205239292
                      </h1>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-3 gap-4 mt-5 mb-10">
              <h1 className="text-5xl md:text-3xl  mb-2 text-center uppercase">
                {t("footer_sajtocsomag")}
              </h1>
              <div className="flex justify-center">
                <ul>
                  <li>
                    <a target="blank" href="https://drive.google.com/drive/folders/1V82T2OMkrZZtNYgkcOM5WmqUgb5aukpb">{t("footer_sajtocsomagLink")}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div></div>
        </div>

        <div className="flex flex-col justify-center items-center mb-10 ">
          <h1 className="text-center text-2xl md:text-xl uppercase mb-2">
            {t("footer_doneByAMK")}
          </h1>
          <a
            href={"https://www.linkedin.com/in/%C3%A1bel-makai-kis-a2904425a/"}
            className=" w-1/3 md:w-1/12"
            target="_blank"
          >
            <Image
              src={amk}
              className="w-full h-full  animate-bounce-slow"
              alt="amk_logo "
            />
          </a>
        </div>
        <hr />

        <div className="flex mx-5 mt-2">
          <div className="flex justify-start ms-0 items-center">
            <a
              href={
                "https://www.linkedin.com/in/%C3%A1bel-makai-kis-a2904425a/"
              }
              target="_blank"
            >
              <Image
                src={amk}
                className=" w-10 md:w-14 h-auto mr-1"
                alt="amk_logo"
              />
            </a>
            <h1 className=" uppercase sm:text-xl  text-sm">
              X Inharmónia - {currentYear}.
            </h1>
          </div>
          <div className="  flex flex-1 justify-end">
            <Link href="/impress">
              <h1 className=" sm:text-xl  text-sm uppercase">
                {t("footer_impresszum")}
              </h1>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
