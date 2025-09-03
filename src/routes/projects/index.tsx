import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Navbar } from "~/components/navbar/navbar";
import { Footer } from "~/components/footer";
import { Redirlink } from "~/components/Redirlink";

interface projectData {
  pathname: string;
  label: string;
  class?: string;
}

export default component$(() => {

  const projects: projectData[] = [
    { pathname: 'https://github.com/WeiJian123-tech/SkatePave.git', label: 'SkatePave' },
    { pathname: 'https://github.com/WeiJian123-tech/DreamShop.git', label: 'DreamShop' },
    { pathname: 'https://github.com/WeiJian123-tech/Unit_Converter.git', label: 'Unit_Converter' },
    { pathname: 'https://github.com/WeiJian123-tech/DawnTrades.git', label: 'DawnTrades' },
    { pathname: 'https://github.com/WeiJian123-tech/CalculatorV3.git', label: 'CalculatorV3' },
    { pathname: 'https://github.com/WeiJian123-tech/Birdlogger.git', label: 'Birdlogger' },
    { pathname: 'https://github.com/WeiJian123-tech/CISC3650WebsiteProject.git', label: 'CISC3650WebsiteProject' },
  ];
    
    return (
        <div class="flex flex-col items-center justify-start w-screen min-h-screen">

            <Navbar />

            <main class="flex flex-col items-center justify-center-safe w-full bg-[#f2d78c] overflow-y-auto">
                <h1 class="text-4xl text-black font-bold font-sans text-center">Projects</h1>

                <ol class="my-2 list-disc text-normal text-slate-900 font-normal font-serif">
                  {projects.map((project) => (
                    <li key={project.pathname}>
                      <Redirlink 
                        key={project.pathname}
                        pathName={project.pathname}
                        label={project.label}
                      />
                    </li>
                  ))}
                </ol>
            </main>

            <Footer />
        </div>
    );
});

export const head: DocumentHead = {
  title: "Projects",
  meta: [
    {
      name: "description",
      content: "Wei Jian's portfolio projects page",
    },
  ],
};