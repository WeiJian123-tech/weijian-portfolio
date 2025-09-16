'use client'

import Socialbtn from "../socialbtn/Socialbtn";
import protonmailIcon from "../../assets/protonmailicon.png";
import linkedinIcon from "../../assets/linkedinicon.png";
import githubIcon from "../../assets/github_PNG40.png";

interface socialBtnData {
    url: string;
    imagePath: string | any;
    altText: string;
    class?: string;
}

export default function Footer() {

    const socialBtnAttr: socialBtnData[] = [
        { 
            url: 'mailto:zhen16999@proton.me', 
            imagePath: protonmailIcon, 
            altText: 'Proton Mail icon that redirects to my email address', 
            class: 'w-auto h-auto mx-2 p-0'
        },
        {
            url: 'https://www.linkedin.com/in/wei-jian-zhen-la', 
            imagePath: linkedinIcon, 
            altText: 'LinkedIn icon that redirects to my LinkedIn profile',
            class: 'w-auto h-auto mx-2 p-0'
        },
        {
            url: 'https://github.com/WeiJian123-tech', 
            imagePath: githubIcon, 
            altText: 'GitHub icon that redirects to my LinkedIn profile', 
            class: 'w-auto h-auto mx-2 p-0'
        },
    ];


    return (
        <footer id="contacts" className="flex flex-col items-center justify-center">

            <div className="flex flex-row items-center justify-evenly p-2 w-full h-auto lg:justify-center">
                {socialBtnAttr.map((attr) => (
                    <Socialbtn 
                        key={attr.url}
                        url={attr.url}
                        imagePath={attr.imagePath}
                        altText={attr.altText}
                        class={attr.class}
                    />
                ))}
            </div>
            
            <small>© 2025 Wei Jian Zhen. Licensed under the MIT License.</small>
        </footer>
    );
}