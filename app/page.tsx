import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
import { Process } from "@/components/sections/Process";
import { Certificates } from "@/components/sections/Certificates";
import { Achievements } from "@/components/sections/Achievements";
import { Projects } from "@/components/sections/Projects";
import { Languages } from "@/components/sections/Languages";
import { Contact } from "@/components/sections/Contact";
import { BackToTop } from "@/components/layout/BackToTop";
import { FilterProvider } from "@/components/context/FilterContext";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <FilterProvider>
        <main className="flex-1">
          <Hero />
          <About />
          <Experience />
          <Education />
          <Skills />
          <Process />
          <Certificates />
          <Achievements />
          <Projects />
          <Languages />
          <Contact />
        </main>
      </FilterProvider>
      <BackToTop />
      <Footer />
    </div>
  );
}
