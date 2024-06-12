'use client'
import { useTranslation } from 'react-i18next';

const Page = () => {
  const { t } = useTranslation();

  const impressumText = [
   {title: t('impressum_Title1'), description: t('impressum_Desc1')},
   {title: t('impressum_Title2'), description: 'www.inharmonia.hu', url: '/#hero'},
   {title: t('impressum_Title3'), description: t('impressum_Desc3')},
   {title: t('impressum_Title4'), description: '+36205239292', url: 'tel:+36205239292'},
   {title: t('impressum_Title5'), description: 'info@inharmonia.hu', url: 'mailto:info@inharmonia.hu'},
   {title: t('impressum_Title6'), description: t('impressum_Desc6'), url: 'https://www.linkedin.com/in/%C3%A1bel-makai-kis-a2904425a/'},
   {title: t('impressum_Title7'), description: t('impressum_Desc7'), url: 'https://www.instagram.com/anett.sulics/'},
   {title: t('impressum_Title8'), description: t('impressum_Desc8') + ' Kft (1234 Város, Minta utca 123., info@tarhelyszolgaltato.hu)', url: 'https://www.instagram.com/anett.sulics/'},
  ]

  const sources = [
   {name: 'Pexels',   url: 'https://www.pexels.com/'},
   {name: 'Unsplash', url: 'https://unsplash.com/'},
   {name: 'Pixabay',  url: 'https://pixabay.com/'},
   {name: 'Freepik',  url: 'https://www.freepik.com/images'},
   {name: 'Icons8',   url: 'https://icons8.com/'},
  ]

  const sourceItems = sources.map((site, index) => 
    <li key={index}>
      <a href={site.url} target="_blank">{site.name}</a>
    </li>
  )

  return (
    <>
<section id='impress'className=' flex justify-center py-10 mt-20 lg:mt-8'>
    <div className="mx-10 md:mx-12 lg:max-w-screen-xl">
      <h1 className='text-center text-5xl mt-20 uppercase mb-10'>{t('footer_impresszum')}</h1>
   
      {impressumText.map((item, index) => (
        <div key={index}>
          <p className='text-2xl font-light text-gray-600'>
            {item.title + ` `}
           {item.url ? <a href={item.url} target="_blank" className='text-xl text-black'>{item.description}</a> : <span className='text-xl text-black'>{item.description}</span> } 
           </p>

        </div>
      ))}


    <div className='my-5'>
      <p className='text-xl'>{t('impressum_rights')} </p>   
      <ul className='text-xl'>{sourceItems}</ul>
    </div>
    </div>
    </section>
    </>
  )
}

export default Page


