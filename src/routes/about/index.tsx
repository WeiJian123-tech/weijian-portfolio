import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Navbar } from "~/components/navbar/navbar";
import { Redirlink } from "~/components/Redirlink";
import { Footer } from "~/components/footer";
import Selfie from '~/assets/wjz_portrait-min.png?jsx';

export default component$(() => {
    
    return (
        <div class="flex flex-col items-start justify-start w-screen min-h-screen">

            <Navbar />

            <main class="flex flex-col flex-grow items-center justify-center-safe w-full overflow-y-auto">
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
                            <h4 class="py-2 text-md font-serif font-bold">
                                Birdlogger
                            </h4>

                            <Redirlink pathName={"https://github.com/WeiJian123-tech/Birdlogger.git"} label={"https://github.com/WeiJian123-tech/Birdlogger.git"} />
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