import Carousel from "./carousel";

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      quote: 'Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.',
      authorName: 'Bonnie Green',
      authorTitle: 'CTO at Flowbite',
      authorImage: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png',
    },
    {
      id: 2,
      quote: 'Really happy with this product. The design is beautiful and the code is very clean. It\'s a pleasure to work with!',
      authorName: 'John Doe',
      authorTitle: 'CEO at Example Corp',
      authorImage: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png',
    },
    {
      id: 3,
      quote: 'A wonderful product with amazing features. It has everything you need to get your project started quickly and efficiently.',
      authorName: 'Jane Smith',
      authorTitle: 'Product Manager at Tech Solutions',
      authorImage: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png',
    },
  ];

  return (
    <div className="md:max-h-screen">
      <div>
        <p className="md:text-7xl pl-10 py-5">What Customer Said</p>
      </div>
      <div className="grid md:grid-cols-3 md:grid-rows-2 grid-flow-row md:grid-flow-row md:gap-0 gap-5 md:min-h-screen justify-items-center">
        {testimonials.map(testimony => (
          <div className="md:content-start md:pl-10 px-10 md:min-w-full">
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
                <p className="text-xl font-semibold text-gray-900 dark:text-white">{testimony.quote}</p>
              </blockquote>
              <figcaption className="flex items-center mt-6 space-x-3 rtl:space-x-reverse">
                <img className="w-6 h-6 rounded-full" src={testimony.authorImage} alt="profile picture" />
                <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-300 dark:divide-gray-700">
                  <cite className="pe-3 font-medium text-gray-900 dark:text-white">{testimony.authorName}</cite>
                  <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">{testimony.authorTitle}</cite>
                </div>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
}