'use client'

import Link from "next/link";
import { Button } from "../ui/button";

export default function Redirbtn({pathName, label, className}: {pathName: string, label: string, className?: string}) {
    return(
        <Button asChild className={className}>
            <Link href={pathName}>{label}</Link>
        </Button>
    );
}