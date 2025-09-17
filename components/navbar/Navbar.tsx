'use client'

import Link from "next/link";

interface navData {
    keyNum: number;
    pathName: string;
    label: string;
}

const navLinks: navData[] = [
    {
        keyNum: 0,
        pathName: '#home',
        label: 'Home'
    },
    {
        keyNum: 1,
        pathName: '#about',
        label: 'About'
    },
    {
        keyNum: 2,
        pathName: '#projects',
        label: 'Projects'
    },
    {
        keyNum: 3,
        pathName: '#contacts',
        label: 'Contacts'
    },
];

export default function Navbar() {
    return (
        <nav className="flex flex-row items-center justify-evenly sticky top-0 left-0 m-0 py-2 w-full h-auto z-50 text-slate-900 font-sans rounded-full shadow-2xl inset-shadow-sm bg-slate-200/90 overflow-hidden">
            {navLinks.map((navLink) => (
                <Link key={navLink.keyNum} href={navLink.pathName} className="p-2 rounded-2xl font-bold hover:bg-slate-100 active:bg-slate-100">{navLink.label}</Link>
            ))}
        </nav>
    );
}