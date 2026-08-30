import { setRequestLocale } from "next-intl/server";

import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Header from "@/components/sections/Header";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <div className="lg:flex lg:justify-between lg:gap-4">
            <Header />

            <main className="relative lg:w-[60%] flex flex-col gap-24">
                <About />
                <Experience />
                <Skills />
                <Projects />
            </main>
        </div>
    );
}
