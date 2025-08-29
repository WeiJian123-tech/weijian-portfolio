import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Navbar } from "~/components/navbar/navbar";

export default component$(() => {
  return (
    <>
      <Navbar />
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
