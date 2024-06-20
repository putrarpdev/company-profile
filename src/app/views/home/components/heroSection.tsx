import { useState, useEffect } from 'react';
import Image from 'next/image';
import { client } from '@/utils/contentful';
import { TypeCpHeroSectionFields } from '@/types/contentful';

export async function fetchHero() {
  try {
    const data = await client.getEntries<TypeCpHeroSectionFields>({
      content_type: 'cpHeroSection'
    });
    return data.items;
  } catch (error) {
    console.log(error);
  }
}

export default async function HeroSection() {
  const heroData = await fetchHero();
  return (
    (heroData && <div className="min-h-screen md:pt-0 pt-10">
      <div className="grid md:grid-cols-3 grid-flow-row md:grid-flow-col gap-4 min-h-screen justify-items-center">
        <div className="md:col-span-2 content-center">
          <p className="md:text-7xl md:pl-10 md:pr-0 pl-10 px-10">{heroData[0].fields.header}</p>
          <p className="md:text-3xl md:pl-10 pl-10 md:pr-0 px-10">{heroData[0].fields.description}</p>
        </div>
        <div className="content-center col-span-2">
          <Image
            width={1000}
            height={1000}
            alt="Image"
            src={`https:${heroData[0].fields.image.fields.file.url}`}
            priority={true}
          />
        </div>
      </div>
    </div>)
  );
};
