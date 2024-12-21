import Featuredprojects from "@/components/Featuredprojects";
import HeroSection from "@/components/HeroSection";
import ContactUs from "@/components/contactUs";

export default function Home () {
  return (
    <main className="min-h-screen  antialiased  ">
      
      <div className="bg-gradient-to-b 
    from-black/[.8] to-gray-900"><HeroSection/>
    </div>
    <Featuredprojects />
    <div className="bg-gradient-to-t 
    from-black/[.8] to-gray-900"><ContactUs/>
    </div>
      
    </main>
  )
}