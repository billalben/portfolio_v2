import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <About />
        <Projects />
        <Skills />
        <Footer />
      </main>
    </>
  );
}
