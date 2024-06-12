"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import memberPic1 from "@/public/images/about_bandMember1.jpg";
import memberPic2 from "@/public/images/about_bandMember2.jpg";
import memberPic3 from "@/public/images/about_bandMember3.jpg";

export default function AboutCard() {
  const { t } = useTranslation();

  const bandMembers = {
    member1: {
      name: "Bazsi",
      image: memberPic1,
      memberDescription: t('aboutCard_MemDesc1')
     },
    member2: {
      name: "Sylo",
      image: memberPic2,
      memberDescription: t('aboutCard_MemDesc2')
    },
    member3: {
      name: "Máté",
      image: memberPic3,
      memberDescription: t('aboutCard_MemDesc3')
    },
  };

  return (
    <>
      <div className="flex  justify-around pb-10">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-10 ">
          {Object.values(bandMembers).map((member, index) => (
            <div
              key={index}
              className="h-full theme-red2 max-w-xs shadow-xl rounded-2xl overflow-hidden bg-cover bg-no-repeat relative border-0"
            >
              <Image
                className="  rounded-t-xl max-w-xs w-full"
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
              />
              <div className="font-bold  mb-4 text-center uppercase text-white mt-5 text-3xl">
                <h1>{member.name}</h1>
              </div>
              <div className="px-5 pb-5 text-white text-center text-lg">
                <p>{member.memberDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
