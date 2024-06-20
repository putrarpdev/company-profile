import { TypeCpTestimonyFields } from "@/types/contentful/TypeCpTestimony";
import Image from 'next/image';
import { client } from "@/utils/contentful";

export async function fetchTestimony() {
  try {
    const data = await client.getEntries<TypeCpTestimonyFields>({
      content_type: 'cpTestimony'
    });
    console.log(data.items[0].fields.authorImage);
    return data.items;
  } catch (error) {
    console.log(error);
  }
}

export default async function TestimonialSection() {
  const testimonyData = await fetchTestimony();
  return (
    <div className="md:max-h-96">
      <div>
        <p className="md:text-7xl pl-10 py-5">What Customer Said</p>
      </div>
      <div className="grid md:grid-cols-3 md:grid-rows grid-flow-row md:grid-flow-row md:gap-0 gap-5 md:min-h-96 justify-items-center">
        {testimonyData?.map((testimony, index) => {
          const { fields }: { fields: { file: { url: string } } } = testimony.fields.authorImage;
          return (
            <div key={index} className="md:content-start md:pl-10 px-10 md:min-w-full">
              <figure className="max-w-screen-md">
                <div className="flex items-center mb-4 text-yellow-300">
                  <svg className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </div>
                <blockquote>
                  <p className="text-xl font-semibold text-gray-900 dark:text-white">{testimony.fields.quote}</p>
                </blockquote>
                <figcaption className="flex items-center mt-6 space-x-3 rtl:space-x-reverse">
                  <Image
                    className="w-6 h-6 rounded-full"
                    width={1000}
                    height={1000}
                    alt="Image"
                    src={`https:${fields.file.url}`}
                    priority={true}
                  />
                  <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-300 dark:divide-gray-700">
                    <cite className="pe-3 font-medium text-gray-900 dark:text-white">{testimony.fields.authorName}</cite>
                    <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">{testimony.fields.authorTitle}</cite>
                  </div>
                </figcaption>
              </figure>
            </div>
          );
        })}
      </div>
    </div>
  );
}