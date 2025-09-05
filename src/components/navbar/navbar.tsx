import { component$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Navbar = component$(() => {

    const isHamClicked = useSignal(false);

    return (
        <nav class="flex flex-row items-center justify-between m-0 p-0 w-full h-[6rem] sticky top-0 z-10 bg-slate-200">
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

            <div class="w-auto h-full">
                <button 
                onClick$={() => isHamClicked.value = !isHamClicked.value} 
                aria-label="Toggle Dropdown Menu" 
                class="block w-auto h-full text-6xl border-l-2 border-slate-950 lg:hidden"
                >
                    ☰
                </button>
            </div>

            <div class={`absolute top-0 right-0 ${isHamClicked.value? 'flex flex-col' : 'hidden'} w-full h-screen z-50 bg-slate-300 lg:static lg:flex lg:flex-row lg:w-1/2 lg:h-full xl:w-1/4`}>
                <button 
                onClick$={
                    () => {
                        isHamClicked.value = !isHamClicked.value;
                    }
                } 
                aria-label="Close Dropdown Menu" 
                class="self-end w-[6rem] h-auto text-4xl text-red-500 bg-slate-100 lg:hidden"
                >
                    X
                </button>
                
                <Link href="/" class="flex grow items-center justify-center w-full h-full font-sans font-bold px-1 border-1 border-black hover:bg-slate-300 active:bg-slate-300">Home</Link>
                <Link href="/about" class="flex grow items-center justify-center w-full h-full font-sans font-bold px-1 border-1 border-black hover:bg-slate-300 active:bg-slate-300">About</Link>
                <Link href="/projects" class="flex grow items-center justify-center w-full h-full font-sans font-bold px-1 border-1 border-black hover:bg-slate-300 active:bg-slate-300">Projects</Link>
                <Link href="/contact" class="flex grow items-center justify-center w-full h-full font-sans font-bold px-1 border-1 border-black hover:bg-slate-300 active:bg-slate-300">Contact</Link>
            </div>

            
        </nav>
    );
});