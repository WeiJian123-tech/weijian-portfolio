import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Navbar } from "~/components/navbar/navbar";
import { Footer } from "~/components/footer";

export default component$(() => {
    
    return (
        <>
            <Navbar />
            <main class="flex flex-col items-center justify-center-safe w-full h-screen">
                <h1>Contact</h1>
            </main>

            <Footer />
        </>
    );
});

export const head: DocumentHead = {
  title: "Contact",
  meta: [
    {
      name: "description",
      content: "Wei Jian's portfolio contact page",
    },
  ],
};