import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";

export default function HomePage() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <Header />

      <main className="mt-12 space-y-20 lg:mt-0 lg:w-[52%] lg:space-y-24">
        <About />
        <Projects />
        <Skills />
        <Footer />
      </main>
    </div>
  );
}
