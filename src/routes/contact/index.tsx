import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Navbar } from "~/components/navbar/navbar";
import { Footer } from "~/components/footer";

export default component$(() => {
    
    return (
        <div class="flex flex-col items-center justify-start w-screen min-h-screen">

            <Navbar />

            <main class="flex flex-col items-center justify-center-safe w-full overflow-y-auto">
                <h1>Contact</h1>
            </main>

            <Footer />
        </div>
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