import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="min-h-screen md:pt-0 pt-10">
      <div className="grid md:grid-cols-3 grid-flow-row md:grid-flow-col gap-4 min-h-screen justify-items-center">
        <div className="md:col-span-2 content-center">
          <p className="md:text-7xl md:pl-10 md:pr-0 pl-10 px-10">
            Welcome to Putrarp<sup>Dev</sup>
          </p>
          <p className="md:text-3xl md:pl-10 pl-10 md:pr-0 px-10">Putrarp Dev is a leading software application engineering company offering comprehensive IT solutions, including company profile creation, web app development, and mobile app creation. We are dedicated to delivering high-quality, innovative solutions to meet the unique needs of our clients.</p>
        </div>
        <div className="content-center col-span-2">
          <Image
            width={1000}
            height={1000}
            alt="Image"
            src={"/happy-full-body-boy.png"}
          />
        </div>
      </div>
    </div>
  );
}