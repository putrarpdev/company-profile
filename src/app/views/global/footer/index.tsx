export default function Footer() {
  return (
    <footer>
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">PutrarpDev™</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="/aboutus" className="hover:underline me-4 md:me-6">About Us</a>
          </li>
          <li>
            <a href="/services" className="hover:underline me-4 md:me-6">Services</a>
          </li>
          <li>
            <a href="/ourteam" className="hover:underline me-4 md:me-6">Our Team</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}