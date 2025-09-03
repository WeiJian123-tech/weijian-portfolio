import { component$ } from "@builder.io/qwik";
import { Socialbtn } from "../socialbtn";
import protonmailIcon from "../../assets/protonmailicon.png";
import linkedinIcon from "../../assets/linkedinicon.png";
import githubIcon from "../../assets/github_PNG40.png";

interface socialBtnData {
    url: string;
    imagePath: string;
    altText: string;
    class?: string;
}

export const Footer = component$(() => {

    const socialBtnAttr: socialBtnData[] = [
        { 
            url: 'mailto:zhen16999@proton.me', 
            imagePath: protonmailIcon, 
            altText: 'Proton Mail icon that redirects to my email address', 
        },
        {
            url: 'https://www.linkedin.com/in/wei-jian-zhen-la', 
            imagePath: linkedinIcon, 
            altText: 'LinkedIn icon that redirects to my LinkedIn profile',
        },
        {
            url: 'https://github.com/WeiJian123-tech', 
            imagePath: githubIcon, 
            altText: 'GitHub icon that redirects to my LinkedIn profile', 
        },
    ];

    return (
        <footer class="flex flex-row items-center justify-evenly p-2 w-full h-auto border-y-1 border-slate-900 text-center">

            {socialBtnAttr.map((attr) => (
                <Socialbtn 
                    key={attr.url}
                    url={attr.url}
                    imagePath={attr.imagePath}
                    altText={attr.altText}
                    class={attr.class}
                />
            ))}
            
            
        </footer>
    );
});