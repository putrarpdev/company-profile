import Image from "next/image";
import Navbar from "./views/global/navbar";
import HomeView from "./views/home";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeView />
    </div>
  );
}
