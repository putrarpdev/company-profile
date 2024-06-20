import { TypeCpServiceSectionFields } from "@/types/contentful";
import { client } from "@/utils/contentful";

export async function fetchServices() {
  try {
    const data = await client.getEntries<TypeCpServiceSectionFields>({
      content_type: 'cpServiceSection'
    });
    return data.items;
  } catch (error) {
    console.log(error);
  }
}

export default async function ProductServiceSection() {
  const servicesData = await fetchServices();
  return (
    <div className="md:max-h-screen">
      <div>
        <p className="md:text-7xl pl-10 py-5">Our Services</p>
      </div>
      <div className="grid md:grid-cols-3 md:grid-rows-2 grid-flow-row md:grid-flow-row md:gap-0 gap-5 md:min-h-screen justify-items-center">
        {servicesData?.map((service: any, index) => (
          <div key={index} className="md:content-start md:pl-10 px-10 md:min-w-full">
            <div className="p-8 bg-gray-800 bg-opacity-40 rounded-md shadow-lg shadow-black transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-opacity-65 duration-1000">
              <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{service.fields.title}</h5>
              <div className="flex items-baseline text-gray-900 dark:text-white">
                <span className="text-3xl font-semibold">Rp.</span>
                <span className="text-5xl font-extrabold tracking-tight">{service.fields.price}</span>
                <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/mandays</span>
              </div>
              <ul role="list" className="space-y-5 my-7">
                {service.fields.features.map((feature: any, index: number) => (
                  <li key={index} className="flex">
                    <svg className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="./services">
                <button type="button" className="text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center transition ease-in-out hover:bg-blue-800 duration-300">
                  View Service Detail
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
