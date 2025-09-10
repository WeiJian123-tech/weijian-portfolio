import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { Navbar } from "~/components/navbar/navbar";
import { Footer } from "~/components/footer";
import { Redirlink } from "~/components/Redirlink";

export default component$(() => {
    
    return (
        <div class="flex flex-col items-start justify-start w-screen min-h-screen">

            <Navbar />

            <main class="flex flex-col items-center justify-center-safe w-full overflow-y-auto bg-slate-100 ">
                <h1 class="text-4xl text-black font-bold font-sans text-center">Contact</h1>

                <div class="flex flex-col items-center justify-center my-2">
                  <Link href="https://giphy.com/gifs/email-YmjleYhDTUiYw" class="w-full h-auto">
                    <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExM254aDU4ZGluazdidTNxdnozbHp1ZXR6b3BxamJ2bzkyaDM2cHoxMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YmjleYhDTUiYw/giphy.gif" alt="A GIF of mail being inserted into a mailbox with 'Email' written on it" width={64} height={64} class="w-full h-auto" />
                  </Link>
                  
                  <Redirlink pathName={"https://giphy.com/gifs/email-YmjleYhDTUiYw"} label={"via GIPHY"} />
                  
                </div>

                <p class="text-lg text-slate-900 font-normal font-serif text-center">Please feel free to contact me via my socials below! 😊👇</p>
                
                <ul class="my-2 list-none text-lg/8 text-slate-900 font-normal font-serif">
                  <li>
                    Email: <Redirlink 
                    pathName={'mailto:zhen16999@proton.me'} 
                    label={'zhen16999@proton.me'} 
                    />
                  </li>
                  <li>
                    LinkedIn: <Redirlink 
                    pathName={'https://www.linkedin.com/in/wei-jian-zhen-la'} 
                    label={'www.linkedin.com/in/wei-jian-zhen-la'} 
                    />
                  </li>
                  <li>
                    GitHub: <Redirlink
                    pathName={'https://github.com/WeiJian123-tech'}
                    label={'https://github.com/WeiJian123-tech'}
                    />
                  </li>
                </ul>
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