import { $, component$ } from "@builder.io/qwik";

interface socialbtnprops {
    url: string;
    imagePath: string;
    altText: string;
    tooltipText?: string;
    class?: string;
}

export const Socialbtn = component$<socialbtnprops>(({url, imagePath, altText, tooltipText, class: className}: socialbtnprops) => {

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
            <span class="hidden p-4 rounded border-2 border-slate-950 bg-slate-100 text-slate-900 text-center">{tooltipText}</span>   
            <img src={imagePath} alt={altText} width={40} height={40} />
        </button>
    );
});