import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import Facilities from "@/components/Facilities";
import ProgramCards from "@/components/ProgramCards";
import Mutawwif from "@/components/Mutawwif";
import Testimonials from "@/components/Testimonials";
import Articles from "@/components/Articles";
import LocationMap from "@/components/LocationMap";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";
import Schedule from "@/components/Schedule";
import Gallery from "@/components/Gallery";
import BookingForm from "@/components/BookingForm";
import Legalitas from "@/components/Legalitas";
import PromoPamflet from "@/components/PromoPamflet";
import PromoCarousel from "@/components/PromoCarousel";
import SectionReveal from "@/components/SectionReveal";
import StatsSection from "@/components/StatsSection"

export default function HomePage() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* HERO (hero biasanya tanpa animation wrapper) */}
      <Hero />

      {/* PROMO CAROUSEL */}
      <SectionReveal>
        <PromoCarousel />
      </SectionReveal>

      {/* WHY CHOOSE */}
      <SectionReveal>
        <WhyChoose />
      </SectionReveal>

      {/* LEGALITAS */}
      <SectionReveal>
        <Legalitas />
      </SectionReveal>

      {/* JADWAL */}
      <SectionReveal>
        <Schedule />
      </SectionReveal>

      {/* PROGRAM */}
      <SectionReveal>
        <ProgramCards />
      </SectionReveal>

      {/* FASILITAS */}
      <SectionReveal>
        <Facilities />
      </SectionReveal>

      {/* GALLERY */}
      <SectionReveal>
        <Gallery />
      </SectionReveal>

      {/* MUTAWIF */}
      <SectionReveal>
        <Mutawwif />
      </SectionReveal>

      {/* TESTIMONI */}
      <SectionReveal>
        <Testimonials />
      </SectionReveal>

      {/* ARTIKEL */}
      <SectionReveal>
        <Articles />
      </SectionReveal>

      {/* MAP */}
      <SectionReveal>
        <LocationMap />
      </SectionReveal>

    
      

      {/* BOOKING FORM */}
      <SectionReveal>
        <BookingForm />
      </SectionReveal>

      {/* FOOTER */}
      <Footer />

      {/* POPUP PROMO */}
      <PromoPamflet />

      

      {/* FLOATING WHATSAPP */}
      <FloatingWA />

      
    </>
  );
}