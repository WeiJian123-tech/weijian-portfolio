import { $, component$ } from "@builder.io/qwik";

interface socialbtnprops {
    url: string;
    imagePath: string;
    altText: string;
    class?: string;
}

export const Socialbtn = component$<socialbtnprops>(({url, imagePath, altText, class: className}: socialbtnprops) => {

    const handleClick = $(
        function handleClick() {
            window.location.href = url;
        }
    );

    return (
        <button 
            type="button" 
            onClick$={handleClick} 
            class={`inline-block relative border border-solid border-slate-900 rounded-md cursor-pointer ${className}`}
        >  
            <img src={imagePath} alt={altText} width={40} height={40} />
        </button>
    );
});