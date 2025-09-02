import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Navbar } from "~/components/navbar/navbar";
import { Redirlink } from "~/components/Redirlink";
import Image from '~/assets/wjz_portrait-min.png?jsx';

export default component$(() => {
    interface footerData {
        pathName: string;
        label: string;
        class?: string;
    }

    const footerLinks: footerData[] = [
        { pathName: 'mailto:zhen16999@proton.me', label: 'Email: zhen16999@proton.me', class: 'text-xs' },
        { pathName: 'www.linkedin.com/in/wei-jian-zhen-la', label: 'LinkedIn: www.linkedin.com/in/wei-jian-zhen-la', class: 'text-xs' },
        { pathName: 'https://github.com/WeiJian123-tech', label: 'GitHub: https://github.com/WeiJian123-tech', class: 'text-xs' },
    ];
    
    return (
        <div class="flex flex-col items-center justify-center w-screen min-h-screen">
            <Navbar />
            <main class="flex flex-col flex-grow items-center justify-center-safe w-full overflow-y-auto">
                <div class="flex flex-row items-start justify-center w-auto h-screen bg-[#90b5cc]">
                    <div class="flex flex-col items-start justify-start p-2 w-1/2 h-full">
                        <h1 class="text-3xl font-serif font-bold">Hello! 👋 My name is Wei Jian Zhen.</h1>
                        <p class="font-serif font-normal">
                            I'm a computer science graduate, web developer, and programmer who has studied various programming languages like React.js and Java. I usually create open source GitHub projects on my own free time. 🙂
                        </p>
                    </div>

                    <div class="p-2 w-1/2 h-full">
                        <Image />
                    </div>
                </div>
            </main>

            <footer class="flex flex-col items-center justify-evenly w-full h-auto text-center">
                {footerLinks.map((link) => (
                <Redirlink
                    key={link.pathName}
                    pathName={link.pathName}
                    label={link.label}
                    class={link.class}
                />
                ))}
            </footer>
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