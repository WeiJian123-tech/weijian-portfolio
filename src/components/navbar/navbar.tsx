import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Navbar = component$(() => {

    return (
        <nav class="flex flex-row items-center justify-between h-[6rem] bg-slate-100">
            <div class="flex items-center justify-center h-full">
                <a href="/">
                    <img 
                        src="https://avatars.githubusercontent.com/u/55195954?v=4" 
                        alt="Wei Jian's GitHub Avatar"
                        width={5}
                        height={5}
                        class="w-auto h-[4rem] m-1 object-contain rounded-full" 
                    />
                </a>
            </div>
            
            <div class="flex flex-row items-center justify-around w-auto h-full bg-slate-200">
                <a href="/" class="flex grow items-center justify-center w-full h-full font-sans font-bold px-1 border-1 border-black hover:bg-slate-300 active:bg-slate-300">Home</a>
                <Link href="/about" class="flex grow items-center justify-center w-full h-full font-sans font-bold px-1 border-1 border-black hover:bg-slate-300 active:bg-slate-300">About</Link>
                <Link href="/projects" class="flex grow items-center justify-center w-full h-full font-sans font-bold px-1 border-1 border-black hover:bg-slate-300 active:bg-slate-300">Projects</Link>
                <Link href="/contact" class="flex grow items-center justify-center w-full h-full font-sans font-bold px-1 border-1 border-black hover:bg-slate-300 active:bg-slate-300">Contact</Link>
            </div>
        </nav>
    );
});