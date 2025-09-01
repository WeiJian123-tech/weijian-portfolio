import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Navbar } from "~/components/navbar/navbar";
import { Redirbtn } from "~/components/Redirbtn";
import { Redirlink } from "~/components/Redirlink";
import heroStyles from "~/heroImage.module.css";

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
    <>
      <Navbar />

      <main class="flex flex-col items-center justify-center-safe w-full h-screen">
        <div class={heroStyles.heroImage}>

          <div class="flex flex-col items-center justify-between w-full h-auto">
            <h1 class="text-4xl text-black font-bold font-sans text-center rounded-b-xs bg-slate-300/40">Wei Jian's Portfolio Homepage</h1>
            <h2 class="text-2xl text-black font-bold font-sans text-center rounded-b-xs bg-slate-300/40">Unleash Work & Wonder!</h2>
          </div>

          <div class="flex items-center justify-center w-full h-auto">
            <Redirbtn url="#" label="View Projects!" class="p-4 text-2xl font-bold font-sans bg-teal-300/90" />
          </div>
          
          <div class="flex items-center justify-center w-full h-auto">
            <small class="font-serif text-gray-800 bg-zinc-300/75">
              Photo by <Redirlink 
              pathName={'https://unsplash.com/@pineapple?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'} 
              label={'Pineapple Supply Co.'} 
              />
              on <Redirlink 
              pathName={'https://unsplash.com/photos/macbook-pro-n_CvvktBf-Q?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'} 
              label={'Unsplash'} 
              />
            </small>
            
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
    </>
  );
});

export const head: DocumentHead = {
  title: "Home",
  meta: [
    {
      name: "description",
      content: "Wei Jian's portfolio homepage",
    },
  ],
};
