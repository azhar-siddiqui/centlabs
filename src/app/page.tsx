import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import MainSection from "@/components/main";

import { MobileDock } from "@/components/mobile-dock";

export default function Home() {
  return (
    <>
      <Header />
      <MainSection />
      <Footer />
      <MobileDock />
    </>
  );
}
