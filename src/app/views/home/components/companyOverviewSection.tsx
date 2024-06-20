export default function CompanyOverviewSection() {
  return (
    <div className="md:max-h-screen">
      <div>
        <p className="md:text-7xl pl-10 py-5">Our Company</p>
      </div>
      <div className="grid md:grid-cols-2 md:grid-rows-2 grid-flow-row md:grid-flow-row md:gap-0 gap-5 md:min-h-screen justify-items-center">
        <div className="md:content-start md:pl-10 px-10">
          <a href="#" className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 md:min-h-[36rem] md:min-w-96">

            <h5 className="mb-2 md:text-4xl font-bold tracking-tight md:text-gray-900 dark:md:text-white">
              Company Overview
            </h5>
            <p className="font-normal md:text-xl md:text-gray-700 dark:md:text-gray-400">
              Putrarp<sup>Dev</sup> is a leading software application engineering company renowned for offering a wide range of comprehensive IT solutions. Our services include company profile creation, web application development, and mobile app creation, all tailored to meet the diverse needs of our clients.

              We are dedicated to delivering high-quality and innovative solutions. Our experienced professionals ensure effective and efficient results by leveraging the latest technologies and methodologies. Whether you need a compelling company profile, a dynamic web application, or a cutting-edge mobile app, Putrarp Dev has the expertise to bring your vision to life.

              We pride ourselves on understanding each client's unique goals and challenges. This client-centric approach enables us to create customized solutions that drive success and foster long-term partnerships. Trust Putrarp Dev to be your reliable partner in navigating the evolving landscape of technology and achieving your business objectives with precision and innovation.
            </p>
          </a>
        </div>
        <div className="md:content-start md:pr-10 px-10">
          <a href="#" className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 md:min-h-[36rem] md:min-w-96">
            <h5 className="mb-2 md:text-4xl font-bold tracking-tight md:text-gray-900 dark:md:text-white">
              Our Mission
            </h5>
            <p className="font-normal md:text-xl md:text-gray-700 dark:md:text-gray-400">
              To provide top-notch IT solutions that drive business success and innovation. We deliver high-quality, reliable services, empowering clients to achieve their goals through cutting-edge technology and a client-centric approach.
            </p>
          </a>
        </div>

      </div>
    </div>
  );
}