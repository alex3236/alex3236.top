import Badge, { TooltipProvider } from './badge';
import { B, PartHolder } from './utils';
import '../style/animate-img.css';
import Image from 'next/image';
import PartContacts from './parts/contacts';
import PartHobbies from './parts/hobbies';
import PartLabels from './parts/labels';
import { PartTitle, PartMotto } from './parts/title';

export default function Main() {
  return (
    <main
      itemScope
      itemType='https://schema.org/Person'
      className='min-h-[100vh] flex overflow-auto h-full w-full justify-center items-center px-8 pb-20 lg:px-16 lg:pb-0'
    >
      <div
        itemProp='mainEntityOfPage'
        className='flex flex-col items-center lg:mr-48'
      >
        <Image
          itemProp='image'
          priority={true}
          src='/image.png'
          alt='Avatar'
          width={256}
          height={256}
          className='lg:hidden relative max-h-64 max-w-64 mt-16 mb-8 object-cover object-top rounded-full shadow-md shadow-slate-400 dark:shadow-slate-300'
        />
        <div className='z-10 h-full md:ml-24 lg:ml-0 lg:py-12 lg:mt-auto lg:max-w-[50vw]'>
          <PartTitle />
          <PartLabels />
          <PartHobbies />
          <PartContacts />
          <PartMotto />
        </div>
        <div className='max-w-sm self-end hidden lg:block animate-img fixed bottom-0 right-0'>
          <Image
            itemProp='image'
            priority={true}
            src='/image.png'
            alt='Avatar'
            width={384}
            height={510}
          />
        </div>
        <TooltipProvider />
      </div>
    </main>
  );
}
