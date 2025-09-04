import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { Navbar } from "~/components/navbar/navbar";
import { Footer } from "~/components/footer";
import { Redirlink } from "~/components/Redirlink";
import SkatePaveImg from "~/assets/SkatePave.png";
import DreamShopImg from "~/assets/DreamShop.png";
import UnConvImg from "~/assets/Unit_Converter.png";
import DawnTradesImg from "~/assets/DawnTrades.png";
import CalculatorImg from "~/assets/CalculatorV3.png";
import BirdloggerImg from "~/assets/Birdlogger.png";
import ToDoImg from "~/assets/CISC3650WebsiteProject.png";

interface projectData {
  repoLink: string;
  repoLabel: string;
  imagePath: string;
  altText: string;
  pagesLink?: string | any;
  pagesLabel?: string | any;
  class?: string;
}

export default component$(() => {

  const projects: projectData[] = [
    {
      repoLink: 'https://github.com/WeiJian123-tech/SkatePave.git',
      repoLabel: 'https://github.com/WeiJian123-tech/SkatePave.git',
      imagePath: SkatePaveImg, 
      altText: 'Screenshot of SkatePave GitHub Pages website',
      pagesLink: 'https://weijian123-tech.github.io/SkatePave/',
      pagesLabel: 'https://weijian123-tech.github.io/SkatePave/',
    },
    {
      repoLink: 'https://github.com/WeiJian123-tech/DreamShop.git',
      repoLabel: 'https://github.com/WeiJian123-tech/DreamShop.git',
      imagePath: DreamShopImg,
      altText: 'Screenshot of DreamShop GitHub Pages website',
      pagesLink: 'https://weijian123-tech.github.io/DreamShop/',
      pagesLabel: 'https://weijian123-tech.github.io/DreamShop/',
    },
    {
      repoLink: 'https://github.com/WeiJian123-tech/Unit_Converter.git',
      repoLabel: 'https://github.com/WeiJian123-tech/Unit_Converter.git',
      imagePath: UnConvImg,
      altText: 'Screenshot of Unit_Converter GitHub repository',
    },
    {
      repoLink: 'https://github.com/WeiJian123-tech/DawnTrades.git',
      repoLabel: 'https://github.com/WeiJian123-tech/DawnTrades.git',
      imagePath: DawnTradesImg,
      altText: 'Screenshot of DawnTrades GitHub repository',
    },
    {
      repoLink: 'https://github.com/WeiJian123-tech/CalculatorV3.git',
      repoLabel: 'https://github.com/WeiJian123-tech/CalculatorV3.git',
      imagePath: CalculatorImg,
      altText: 'Screenshot of CalculatorV3 GitHub repository'
    },
    {
      repoLink: 'https://github.com/WeiJian123-tech/Birdlogger.git',
      repoLabel: 'https://github.com/WeiJian123-tech/Birdlogger.git',
      imagePath: BirdloggerImg,
      altText: 'Screenshot of Birdlogger GitHub repository'
    },
    {
      repoLink: 'https://github.com/WeiJian123-tech/CISC3650WebsiteProject.git',
      repoLabel: 'https://github.com/WeiJian123-tech/CISC3650WebsiteProject.git',
      imagePath: ToDoImg,
      altText: 'Screenshot of my CISC 3650 Website To-do list project',
      pagesLink: 'https://weijian123-tech.github.io/CISC3650WebsiteProject/',
      pagesLabel: 'https://weijian123-tech.github.io/CISC3650WebsiteProject/',
    },
  ];
  
    return (
        <div class="flex flex-col items-start justify-start w-screen min-h-screen">

            <Navbar />

            <main class="flex flex-col items-center justify-center-safe w-full bg-[#f2d78c] overflow-y-auto">
                <h1 class="text-4xl text-black font-bold font-sans text-center">Projects</h1>

                <div class="grid grid-cols-1 items-center justify-center my-2 w-full h-auto">

                  {projects.map((project) => (
                    <div class="grid items-center justify-center" key={project.repoLink}>
                      <div class="grid items-center justify-center" key={project.repoLink}>
                        <Link href={project.repoLink} key={project.repoLink}>
                          <img src={project.imagePath} alt={project.altText} width={128} height={128} class="w-full h-auto" />
                        </Link>
                      </div>
                      <div class="grid items-center justify-center p-2" key={project.repoLink}>
                        <div>
                          <p class="font-serif font-bold">GitHub Repository: </p>
                          <Redirlink pathName={project.repoLink} label={project.repoLabel} />
                        </div>

                        <div>
                          <p class="font-serif font-bold">GitHub Pages Website (if applicable): </p>
                          <Redirlink pathName={project.pagesLink} label={project.pagesLabel} />
                          <br />
                        </div>
                        
                        
                      </div>
                    </div>
                  ))}
                  

                </div>
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