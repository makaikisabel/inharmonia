"use client";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
import Image from "next/image";
import merch1 from "@/public/images/merch_item1.jpg";
import merch2 from "@/public/images/merch_item2.jpg";
import merch3 from "@/public/images/merch_item3.jpg";
import merch4 from "@/public/images/merch_item4.jpg";


export default function Merch() {
  const { t } = useTranslation();

  const merchItem = [
    {
      name: "Kábítószerelem CD",
      detais: t('merch1_details'),
      price: "2999HUF",
      img: merch1,
    },
    {
      name: t('merch2_name'),
      detais: t('merch2_details'),
      price: "999HUF",
      img: merch2,
    },
    {
      name: "Önszabotázs CD",
      detais: t('merch3_details'),
      price: "2999HUF",
      img: merch3,
    },
    {
      name: t('merch4_name'),
      detais: t('merch4_details'),
      price: "4999HUF",
      img: merch4,
    },
  ];

  // const email = <a href="mailto:info@inharmoniaofficial.com">info@inharmoniaofficial.com</a>
  const email ='info@inharmoniaofficial.com'
  const merchDetails =  <p>{t('merch_Details', {email})}</p>
  return (
    <>
      <section
        id="merch"
        className="flex justify-center bg-cover-merch bg-cover bg-center text-white py-16"
      >
        <div className="mx-10 md:mx-12 lg:max-w-screen-xl">
          <h1 className="md:text-left text-5xl p-2 uppercase">
            {t("menu_merch")}
          </h1>
        

          <Trans i18nKey="merch_Detail">
 <a href="mailto:info@inharmoniaofficial.com">info@inharmoniaofficial.com</a>
</Trans>


{/* <Trans i18nKey="merch_Detail" >
  Hello <strong title={t('merch_Detail')}>{{email}}</strong>, you have  unread message..
</Trans> */}



         {/* {merchDetails} */}
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
            {merchItem.map((item, index) => (
              <div key={index} className="theme-dark rounded-2xl mb-2">
                <Image
                  src={item.img}
                  alt={item.name}
                  className=" rounded-t-2xl w-full h-auto"
                />
                <div className="p-3 text-center my-3">
                  <h1 className=" text-2xl uppercase">{item.name}</h1>
                  <h6 className="text-5xl mt-2 text-red-700">{item.price}</h6>
                  <p className="mt-3">{item.detais}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
