import { component$ } from "@builder.io/qwik";
import { Redirlink } from "~/components/Redirlink";

export const Footer = component$(() => {
    interface footerData {
        pathName: string;
        label: string;
        class?: string;
    }

    const footerLinks: footerData[] = [
        { pathName: 'mailto:zhen16999@proton.me', label: 'Email: zhen16999@proton.me', class: 'text-xs' },
        { pathName: 'www.linkedin.com/in/wei-jian-zhen-la', label: 'LinkedIn: www.linkedin.com/in/wei-jian-zhen-la', class: 'text-xs' },
        { pathName: 'https://github.com/WeiJian123-tech', label: 'GitHub: https://github.com/WeiJian123-tech', class: 'text-xs' },
    ];

    return (
        <footer class="flex flex-col items-center justify-evenly w-full h-auto text-center">
            {footerLinks.map((link) => (
            <Redirlink
                key={link.pathName}
                pathName={link.pathName}
                label={link.label}
                class={link.class}
            />
            ))}
        </footer>
    );
});