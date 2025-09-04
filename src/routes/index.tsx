import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Navbar } from "~/components/navbar/navbar";
import { Redirbtn } from "~/components/Redirbtn";
import { Redirlink } from "~/components/Redirlink";
import { Footer } from "~/components/footer";
import heroStyles from "~/heroImage.module.css";

export default component$(() => {

  return (
    <div class="flex flex-col items-start justify-start w-auto min-h-screen">

      <Navbar />

      <main class="flex flex-col items-center justify-center w-full overflow-y-auto">
        <div class={heroStyles.heroImage}>

          <div class="flex flex-col items-center justify-between w-full h-auto">
            <h1 class="text-4xl text-black font-bold font-sans text-center rounded-b-xs bg-slate-300/40">Wei Jian's Portfolio Homepage</h1>
            <h2 class="text-2xl text-black font-bold font-sans text-center rounded-b-xs bg-slate-300/40">Unleash Work & Wonder!</h2>
          </div>

          <div class="flex items-center justify-center w-full h-auto">
            <Redirbtn url="/projects/" label="View Projects!" class="p-4 text-2xl font-bold font-sans bg-green-300/90" />
          </div>
          
        </div>

        <div class="flex items-center justify-end w-full h-auto bg-amber-100">
          <small class="font-serif text-gray-500">
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
      </main>

      <Footer />
    </div>
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
