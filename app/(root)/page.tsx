import Image from "next/image";
import Banner from "./_components/banner";
import BellIcon from "@/public/fun88/assets/bell.svg";
import MainNavigations from "../components/navigations";
import Display from "./_components/display";

export default function Home() {
  return (
    <div className="w-full grid gap-2 py-3 px-4">
      <Banner />
      <div className="w-full flex gap-1 justify-start items-center">
        <Image src={BellIcon} alt="bell" width={22} height={22} />
        <span className="text-sm text-primary font-medium">FELICIDADES artxxxxipa! GANADOR DESTACADO</span>
      </div>
      <MainNavigations />
      <Display />
    </div>
  );
}
