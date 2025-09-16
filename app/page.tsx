import './globals.css';
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Redirbtn from "@/components/redirbtn/Redirbtn";
import Link from "next/link";
import Image from "next/image";
import Selfie from '../assets/wjz_portrait-min.png';
import SkatePaveImg from "../assets/SkatePave.png";
import DreamShopImg from "../assets/DreamShop.png";
import UnConvImg from "../assets/Unit_Converter.png";
import DawnTradesImg from "../assets/DawnTrades.png";
import CalculatorImg from "../assets/CalculatorV3.png";
import BirdloggerImg from "../assets/Birdlogger.png";
import ToDoImg from "../assets/CISC3650WebsiteProject.png";

export default function Home() {
  
  interface projectData {
    repoLink: string;
    repoLabel: string;
    imagePath: string | any;
    altText: string;
    pagesLink?: string | any;
    pagesLabel?: string | any;
    class?: string;
  }

  const paragraphStyles:string = 'py-2 text-2xl font-serif font-normal indent-8 lg:indent-16';

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
    <div>
      <Navbar />

      <main className="flex flex-col items-center justify-center w-full h-full">
        <div id="home" className="backgroundImage">

          <div className="flex flex-col items-center justify-between w-full h-auto">
            <h1 className="text-4xl text-black font-bold font-sans text-center rounded-b-xs bg-slate-300/40 lg:text-6xl lg:p-2">
            Wei Jian's Portfolio Homepage
            </h1>
            <h2 className="text-2xl text-black font-bold font-sans text-center rounded-b-xs bg-slate-300/40 lg:text-4xl lg:p-2">
            Unleash Work & Wonder!
            </h2>
          </div>

          <div className="flex items-center justify-center w-full h-auto">
            <Redirbtn pathName="#projects" label="View Projects!" className="p-4 text-2xl font-bold font-sans bg-green-300/90 lg:p-8 lg:text-4xl" />
          </div>
        </div>

        <div className="flex items-center justify-end w-full h-auto bg-amber-100">
          <small className="font-serif text-gray-500">
            Photo by <Link href="https://unsplash.com/@pineapple?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Pineapple Supply Co.
            </Link>
            on <Link href="https://unsplash.com/photos/macbook-pro-n_CvvktBf-Q?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
            </Link>
          </small>
          
        </div>

        <div id="about" className="flex flex-col w-full h-auto bg-[#c0e0f3] bg-gradient-to-b from-slate-300 from-5% via-[#c0e0f3] via-50% to-orange-200 to-99%">

          <div className="flex flex-col items-center justify-center max-h-1/4 text-center overflow-hidden">
              <h1 className="text-4xl font-serif font-bold">Hello! 👋</h1>
              <h1 className="text-4xl font-serif font-bold">My name is Wei Jian Zhen.</h1>
          </div>

          <div className="flex flex-row items-center justify-center my-2 w-full h-auto overflow-hidden border-4 border-solid border-slate-900 sm:border-2 lg:border-0">
              <Image src={Selfie} alt="A selfie portrait of Wei Jian Zhen" className="w-full h-[28rem] sm:w-1/2 sm:h-[30rem] lg:w-1/3 xl:w-1/4 xl:h-[34rem]" />
          </div>

          <div className="px-2 py-1 overflow-hidden">
            <p className={paragraphStyles}>
                I'm a web developer and programmer who has studied various programming languages like React.js and Java. 
                I usually create open source GitHub projects on my own free time prioritizing user interface experience and quirky ideas. 😊
            </p>
            <p className={paragraphStyles}>
                During my free time, I like to play video games like <Link href="https://www.konami.com/yugioh/masterduel/us/en/">Yugioh Master Duel</Link> and <Link href="https://www.smashbros.com/">Super Smash Bros.</Link> 🎮
                I like to play video games so much that I wanted to make a video game myself. 
            </p>
            <p className={paragraphStyles}>
                Therefore during my middle school years,
                I decided with my stary-eyed passion to start learning how to program from <Link href="https://www.khanacademy.org/computing/computer-programming/programming">Kahn Academy</Link>. 🤩
                Programming was intuitive because I just had to figure out which steps to place in order for ther program to work.
                Yet programming was boring and convoluted since I had to determine exactly <i>how</i> it should be ordered along with syntax, bugs, etc. 👾
            </p>
            <p className={paragraphStyles}>
                You would think a program would be able to run even without a missing semicolon, huh? 🙄
                Wait what? How was I supposed to know I would inevitably create an infinite loop in my JavaScript program!? 😖
                <br />
                <br />
                Oh... Missing ending condition. 😑 😐
            </p>
            <p className={paragraphStyles}>
                Anyways, overtime I researched and failed faster to improve my programming skills and attain greater knowledge of computer science as a whole.
                Every glitch/bug was an utter annoyance and an oppurtunity to learn how to fix it. 
                Every all-nighter was tiresome and built character along the way.
                And all the people I met and worked with helped guide my path along my ever continuous programming and professional development. 💯
                When the problems got difficult, I asked my teachers/professors for help or surfed the web for any solutions.
            </p>
            <p className={paragraphStyles}>
                Programs are meant to be solutions to problem(s). 
                How will this life pave a professional programming career for me and for maybe you, dear visitor? 🤔
                Please contact me through my social in the footer down below to answer that question. 😉
            </p>
          </div>

        </div>

        <div className="flex flex-row items-start justify-center w-full h-full bg-orange-300 bg-gradient-to-b from-orange-200 from-5% via-orange-300 via-50% to-green-200 to-99%">
            <div className="flex flex-col items-center justify-start p-2">
                <h2 className="text-3xl font-serif font-bold text-center">
                    Professional Background
                </h2>
                <p className={paragraphStyles}>
                    I have an undergraduate computer science degree from CUNY Brooklyn College. 
                    I learned about data structures, discrete structures, C++ programming paradigms, and more.
                    I attended a competitive web development fellowship called CUNY Tech Prep. 
                    I volunteered and interned at organizations like New York Public Interest Research Group (NYPIRG)
                    where I participated in planning and holding events for activism related topics/goals.
                    Even after attaining my degree and working at a few organizations, I continue to learn and grow.
                    I program and push my projects onto GitHub for the world to see. To view them, please visit 
                    my <Link href="#projects">projects</Link> section to explore the wonderful projects I created over the years. 😄
                </p>

                <h3 className="text-2xl font-serif font-bold text-center">
                    My Top 5 Programming Languages
                </h3>
                <ol className="text-xl py-4 list-decimal font-mono">
                    <li>Java</li>
                    <li>JavaScript</li>
                    <li>Qwik.js</li>
                    <li>Python</li>
                    <li>Next.js</li>
                </ol>
            </div>
        </div>

        <div className="flex flex-row items-start justify-center w-full h-full bg-green-300 bg-gradient-to-b from-green-200 from-1% via-green-300 via-89% to-[#dbc4f8] to-99%">
            <div className="flex flex-col items-center justify-center p-2">
                <h2 className="text-3xl font-serif font-bold text-center">
                    Mission Statement
                </h2>
                <p className="p-2 text-2xl font-serif font-normal">
                    To continuously educate, adapt, and innovate in an ever-changing tech field providing quality user experiences.
                </p>
            </div>
        </div>

        <div id="projects" className="flex flex-col items-center justify-center-safe w-full overflow-y-auto bg-[#f2d78c] bg-gradient-to-b from-[#fce29c] via-orange-300 to-emerald-200">
          <h1 className="text-4xl text-black font-bold font-sans text-center">Projects</h1>

          <div className="grid grid-cols-1 items-center justify-center my-2 w-full h-auto lg:grid-cols-2 lg:gap-4 lg:px-4 lg:py-2">

            {projects.map((project) => (
              <div className="grid items-center justify-center" key={project.repoLink}>
                <div className="grid items-center justify-center">
                  <Link href={project.repoLink} key={project.repoLink}>
                    <Image src={project.imagePath} alt={project.altText} className="w-full h-auto" />
                  </Link>
                </div>
                <div className="grid items-center justify-center p-2">
                  <div>
                    <p className="font-serif font-bold">GitHub Repository: </p>
                    <Link href={project.repoLink}>{project.repoLabel}</Link>
                  </div>

                  <div>
                    <p className="font-serif font-bold">GitHub Pages Website (if applicable): </p>
                    <Link href={project.repoLink}>{project.repoLabel}</Link>
                    <br />
                  </div>
                  
                  
                </div>
              </div>
            ))}
            

          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
