import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { Navbar } from "~/components/navbar/navbar";
import { Redirlink } from "~/components/Redirlink";
import { Footer } from "~/components/footer";
import Selfie from '~/assets/wjz_portrait-min.png?jsx';
import BirdloggerImg from '~/assets/Birdlogger.png?jsx';

export default component$(() => {
    
    return (
        <div class="flex flex-col items-start justify-start w-screen min-h-screen m-0 p-0 box-border">

            <Navbar />

            <main class="flex flex-col flex-grow items-center justify-center-safe w-full overflow-y-auto">

                <div class="flex flex-col w-full h-auto bg-[#c0e0f3]">

                    <div class="flex items-start justify-center max-h-1/4 p-1 overflow-hidden border-1 border-black">
                        <h1 class="text-3xl font-serif font-bold">Hello! 👋 My name is Wei Jian Zhen.</h1>
                    </div>

                    <div class="overflow-hidden border-1 border-red-500">
                        <Selfie alt="A selfie portrait of Wei Jian Zhen" />
                    </div>

                    <div class="p-1 overflow-hidden border-1 border-green-500">
                        <p class="font-serif font-normal">
                            I'm a web developer and programmer who has studied various programming languages like React.js and Java. 
                            I usually create open source GitHub projects on my own free time prioritizing user interface experience and quirky ideas. 😊
                        </p>
                        <p class="font-serif font-normal">
                            During my free time, I like to play video games like <Redirlink 
                            pathName={"https://www.konami.com/yugioh/masterduel/us/en/"} 
                            label={"Yugioh Master Duel"} 
                            /> and <Redirlink 
                            pathName={"https://www.smashbros.com/"} 
                            label={"Super Smash Bros."} />. 🎮
                            I like to play video games so much that I wanted to make a video game myself. 
                        </p>
                        <p class="font-serif font-normal">
                            Therefore during my middle school years,
                            I decided with my stary-eyed passion to start learning how to program from <Redirlink pathName={"https://www.khanacademy.org/computing/computer-programming/programming"} label={"Khan Academy"} />. 🤩
                            Programming was intuitive yet boring and convoluted 
                            because I had to figure out which steps to place in order for ther program to work 
                            however I need to determine how it should be ordered along with syntax, bugs, etc. 👾
                        </p>
                        <p class="font-serif font-normal">
                            You would think a program would be able to run even without a missing semicolon, huh? 🙄
                            Wait what? How was I supposed to know I would inevitably create an infinite loop in my JavaScript program!? 😖
                            Oh... Missing ending condition. 😑 😐
                        </p>
                        <p class="font-serif font-normal">
                            Anyways, overtime I researched and failed faster to improve my programming skills and attain greater knowledge of computer science as a whole.
                            Every glitch/bug was an utter annoyance and an oppurtunity to learn how to fix it. 
                            Every all-nighter was tiresome and built character along the way.
                            And all the people I met and worked with helped guide my path along my ever continuous programming and professional development. 💯
                            When the problems got difficult, I asked my teachers/professors for help or surfed the web for any solutions.
                        </p>
                        <p class="font-serif font-normal">
                            Programs are meant to be solutions to problem(s). 
                            How will this life pave a professional programming career for me and for maybe you, dear visitor? 🤔
                            Please contact me through my social in the footer down below to answer that question. 😉
                        </p>
                    </div>

                </div>

                {/*
                <div class="flex flex-row items-start justify-center w-full h-full bg-[#90b5cc]">
                    <div class="flex flex-col items-start justify-start p-2 w-1/2 h-full">
                        <h1 class="text-3xl font-serif font-bold">Hello! 👋 My name is Wei Jian Zhen.</h1>
                        <p class="font-serif font-normal">
                            I'm a computer science graduate, web developer, and programmer who has studied various programming languages like React.js and Java. 
                            I usually create open source GitHub projects on my own free time. 🙂
                        </p>

                        <p class="mt-3 font-serif font-normal">
                            For more information, scroll or swipe down below! ⬇️
                        </p>
                    </div>

                    <div class="p-2 w-1/2 h-full">
                        <Selfie />
                    </div>
                </div>
                */}
                

                <div class="flex flex-row items-start justify-center w-full h-full bg-orange-300">
                    <div class="flex flex-col items-start justify-start p-2">
                        <h2 class="text-xl font-serif font-bold">
                            Professional Background
                        </h2>
                        <p class="font-serif font-normal">
                            I have an undergraduate computer science degree from CUNY Brooklyn College. 
                            I learned about data structures, discrete structures, C++ programming paradigms, and more.
                            I attended a competitive web development fellowship called CUNY Tech Prep. 
                            I volunteered and interned at organizations like New York Public Interest Research Group (NYPIRG)
                            where I participated in planning and holding events for activism related topics/goals.
                            Even after attaining my degree and working at a few organizations, I continue to learn and grow.
                            I program and push my projects onto GitHub for the world to see. To view them, please visit 
                            my <Redirlink pathName={"../projects"} label={"projects"} /> section to explore the wonderful projects I created over the years. 😄
                        </p>

                        <h3 class="text-lg font-serif font-bold">
                            My Top 5 Programming Languages
                        </h3>
                        <ol class="pl-10 list-decimal font-mono">
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>Qwik.js</li>
                            <li>Python</li>
                            <li>Next.js</li>
                        </ol>
                    </div>
                </div>

                <div class="flex flex-row items-start justify-center w-full h-full bg-green-300">
                    <div class="flex flex-col items-start justify-start p-2">
                        <h2 class="text-xl font-serif font-bold">
                            Mission Statement
                        </h2>
                        <p class="font-serif font-normal">
                            To continuously educate, adapt, and innovate in an ever-changing tech field providing quality user experiences.
                        </p>
                    </div>
                </div>

                <div class="flex flex-row items-start justify-center w-full h-full bg-violet-300">
                    <div class="flex flex-col items-center justify-start p-2">
                        <h2 class="text-xl font-serif font-bold text-center">
                            Featured Project!
                        </h2>
                        
                        <div class="flex flex-col items-center justify-center pt-4 text-center">
                            <Link href="https://github.com/WeiJian123-tech/Birdlogger.git">
                                <BirdloggerImg />
                            </Link>

                            <Redirlink pathName={"https://github.com/WeiJian123-tech/Birdlogger.git"} label={"Birdlogger"} class={"text-xl"} />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
});

export const head: DocumentHead = {
  title: "About",
  meta: [
    {
      name: "description",
      content: "Wei Jian's portfolio about page",
    },
  ],
};