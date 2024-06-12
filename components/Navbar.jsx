"use client";
import Image from "next/image";
import Link from "next/link";
import ihLogo from "@/public/assets/inharmonia_logo.png";
import LanguageChanger from "./LanguageChanger";
import NavbarLinks from "./NavbarLinks";
import SocMedLinks from "./SocMedLinks";
import { useState } from "react";

export default function Navbar() {
  // ##############################   BURGERMENU OPEN-CLOSE  ##############################

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // ##############################   BURGERMENU OPEN-CLOSE END  ##############################

  return (
    <>
      <nav
        id="navbar"
        className="realtive flex top-0 z-[1] p-3 bg-cover-image bg-cover   fixed w-full items-center"
      >
        <Link href={"http://localhost:3000/"}>
          <Image
            src={ihLogo}
            className="w-52 h-auto"
            alt="inharmonia_logo"
            priority={true}
          />
        </Link>
        <div className="lg:flex hidden py-3 items-center">
          <NavbarLinks />
        </div>

        <div className="flex-1 lg:flex hidden items-center justify-end py-2">
          <SocMedLinks />
          <LanguageChanger />
        </div>

        {/* MOBILE */}

        <div className="block lg:hidden ml-auto mr-1">
          <LanguageChanger />
        </div>

        <div
          className="flex justify-end lg:hidden  pr-4 cursor-pointer"
          onClick={toggleMenu}
        >
          <div
            id="mobile-menu-button"
            className={`group ${isMenuOpen ? "open" : ""}`}
          >
            <div
              className={` bg-zinc-200 rounded-full w-8 h-1 transition duration-500 ${
                isMenuOpen ? "rotate-45 translate-y-2" : "translate-y-0"
              }`}
            ></div>
            <div
              className={` bg-zinc-200 rounded-full w-8 h-1 mt-1 transition duration-500 ${
                isMenuOpen ? "scale-x-0" : "scale-x-100"
              }`}
            ></div>
            <div
              className={` bg-zinc-200 rounded-full w-8 h-1 mt-1 transition duration-500 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : "translate-y-0"
              }`}
            ></div>
          </div>
        </div>
        {/* MOBILE END  */}

        {isMenuOpen && (
          <div className="absolute lg:hidden flex flex-col justify-center bg-cover-image bg-bottom text-center top-[100%] py-1 w-full left-0">
            <NavbarLinks className="block" closeMenu={closeMenu} />
            <div className="flex flex-row justify-center">
              <SocMedLinks closeMenu={closeMenu} />
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
