import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { Navbar } from "~/components/navbar/navbar";
import { Redirbtn } from "~/components/Redirbtn";
import heroStyles from "~/heroImage.module.css";

export default component$(() => {
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
            <small class="font-serif text-gray-900 bg-slate-300/40">
              Photo by <Link href="https://unsplash.com/@pineapple?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" class="underline">
              Pineapple Supply Co.
              </Link> on <Link href="https://unsplash.com/photos/macbook-pro-n_CvvktBf-Q?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" class="underline">
              Unsplash
              </Link>
            </small>
            
          </div>
          
        </div>
      </main>
      <footer>
        <p>Email</p>
        <p>LinkedIn</p>
        <p>GitHub</p>
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
