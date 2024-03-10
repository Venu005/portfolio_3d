import Image from "next/image";
import bg from "../../public/bg/bg_bat.jpg";
import RenderModal from "@/components/RenderModal";
import BatModel from "@/components/models/batman";
import Navigation from "@/components/navigation";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        src={bg}
        alt="bg-image"
        fill
        className="h-full w-full object-cover object-center  -z-50 opacity-25"
      />
      <div className="w-full h-screen">
      <Navigation />
        <RenderModal>
          <BatModel />
        </RenderModal>
      </div>
    </main>
  );
}
