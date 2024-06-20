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

export default async function TeamView() {
  const teamMembers = await fetchTeamMembers();
  return (
    <div className="md:content-start md:pl-10 px-10 md:min-w-full md:max-h-fit">
      <a href="#" className="block p-6 bg-gray-800 bg-opacity-40 rounded-md shadow-lg shadow-black md:min-h-fit md:min-w-96 transition ease-in-out hover:bg-opacity-65 duration-1000">
        <h5 className="mb-2 md:text-4xl font-bold tracking-tight md:text-white ">
          Our Team
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 justify-items-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full max-w-sm bg-gray-800 bg-opacity-0 rounded-md shadow-lg shadow-black  ">
              <div className="flex flex-col items-center pb-10 px-4 pt-4">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={member.picture.large} alt="Bonnie image" />
                <h5 className="mb-1 text-xl font-medium text-white ">{`${member.name.first} ${member.name.last}`}</h5>
                <span className="text-sm text-gray-500 ">{`${member.location.city}, ${member.location.country}`}</span>
              </div>
            </div>
          ))}
        </div>
      </a>
    </div>
  )
}