import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function HomePage() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <Header />

      <main className="pt-24 lg:w-[52%] lg:py-24">
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}
