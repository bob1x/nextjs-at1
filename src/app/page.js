import Image from "next/image";
import CarouselHome from '@/components/client/carouselHome'
import MainGridHome from '@/components/client/mainGridHome'
import MeilleuresOffres from "@/components/client/meilleuresOffres";
import Footer from '@/components/client/footer';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <>
     <CarouselHome/>
      <MainGridHome/>
      <MeilleuresOffres/>
      <Footer/>
     </>
     
    </main>
  );
}
