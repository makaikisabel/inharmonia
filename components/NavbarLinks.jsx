"use client";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function NavbarLinks({ closeMenu }) {
  const { t } = useTranslation();

  const menuLinks = {
    rolunk: [
      {
        href: "/#aboutus",
        text: t("menu_rolunk"),
      },
    ],
    albumok: [
      {
        href: "/#albums",
        text: t("menu_albumok"),
      },
    ],
    galeria: [
      {
        href: "/#gallery",
        text: t("menu_galeria"),
      },
    ],
    merch: [
      {
        href: "/#merch",
        text: t("menu_merch"),
      },
    ],

    kapcsolat: [
      {
        href: "/#footer",
        text: t("menu_kapcsolat"),
      },
    ],
  };

  return (
    <>
      {Object.values(menuLinks).map((links) =>
        links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className=" gap-2 ms-3 mt-2"
            onClick={closeMenu}
          >
            <div className="  text-2xl  ms-2 text-white hover:-translate-1 trans hover:scale-125 scale hover: duration-300">
              <h3 className="uppercase">{link.text}</h3>
            </div>
          </Link>
        ))
      )}
    </>
  );
}
