'use client'

import Image from "next/image";
import { Button } from "../ui/button";

interface socialbtnprops {
    url: string;
    imagePath: string;
    altText: string;
    class?: string;
}


export default function Socialbtn({url, imagePath, altText, class: className}: socialbtnprops) {
    const handleClick = function handleClick() {
        window.location.href = url;
    }

    return (
        <Button 
            type="button" 
            variant={"secondary"}
            onClick={handleClick} 
            className={`inline-block relative border border-solid border-slate-900 rounded-md cursor-pointer ${className}`}
        >  
            <Image src={imagePath} alt={altText} className="w-[3rem] h-auto" />
        </Button>
    );
}