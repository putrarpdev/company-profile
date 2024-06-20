import { TypeCpServiceSectionFields } from "@/types/contentful";
import { client } from "@/utils/contentful";
import TeamView from "../global/team";

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

export async function fetchTeamMembers() {
  try {
    const response = await fetch('https://randomuser.me/api/?results=3');
    const data = await response.json();
    if (data.results) {
      const members: TeamMember[] = data.results.map((result: any) => ({
        name: {
          first: result.name.first,
          last: result.name.last,
        },
        location: {
          city: result.location.city,
          country: result.location.country,
        },
        email: result.email,
        picture: {
          large: result.picture.large,
        },
      }));
      return members
    }
  } catch (error) {
    console.error('Error fetching team members:', error);
  }
};

export default async function ServicesView() {
  const servicesData = await fetchServices();

  return (
    <div className="md:max-h-fit pb-10">
      <div>
        <p className="md:text-7xl pl-10 py-5">Our Services</p>
      </div>
      <div className="grid md:grid-rows grid-flow-row md:grid-flow-row gap-5">
        {servicesData.map((service, index) => (
          <div key={index} className="md:content-start md:pl-10 px-10 md:min-w-full md:max-h-fit">
            <a href="#" className="block p-6 bg-gray-800 bg-opacity-40 rounded-md shadow-lg shadow-black md:min-h-fit md:min-w-96 transition ease-in-out hover:bg-opacity-65 duration-1000">
              <h5 className="mb-2 md:text-4xl font-bold tracking-tight md:text-white ">
                {service.fields.title}
              </h5>
              <p className="font-normal md:text-xl dark:md:text-gray-400">
                {service.fields.description}
              </p>
            </a>
          </div>
        ))}

        <TeamView />
      </div>
    </div>
  );
}


