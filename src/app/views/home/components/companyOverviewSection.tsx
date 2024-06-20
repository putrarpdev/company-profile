import { TypeCpCompanySectionFields } from "@/types/contentful";
import { client } from "@/utils/contentful";
import { Entry } from "contentful";

export async function fetchCompany(): Promise<Entry<TypeCpCompanySectionFields>[]> {
  try {
    const data = await client.getEntries<TypeCpCompanySectionFields>({
      content_type: 'cpCompanySection'
    });

    const filteredEntries = data.items.filter(entry =>
      entry.fields.title === 'Company Overview' || entry.fields.title === 'Our Mission'
    );
    return filteredEntries;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch company entries');
  }
}

export default async function CompanyOverviewSection() {
  const companyData = await fetchCompany();
  return (
    <div className="md:max-h-screen">
      <div>
        <p className="md:text-7xl pl-10 py-5">Our Company</p>
      </div>
      <div className="grid md:grid-cols-2 md:grid-rows-2 grid-flow-row md:grid-flow-row md:gap-0 gap-5 md:min-h-screen justify-items-center">
        {companyData.map((company : any, index) => (
          <div key={index} className="md:content-start md:pl-10 px-10">
            <a href="#" className="block p-6 bg-gray-800 bg-opacity-40 rounded-md shadow-lg shadow-black md:min-h-[36rem] md:min-w-96 transition ease-in-out hover:bg-opacity-65 duration-1000">
              <h5 className="mb-2 md:text-4xl font-bold tracking-tight md:text-gray-900 dark:md:text-white">
                {company.fields.title}
              </h5>
              <p className="font-normal md:text-xl md:text-gray-700 dark:md:text-gray-400">
                {company.fields.description}
              </p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
