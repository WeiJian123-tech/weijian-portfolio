'use client'

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex flex-row items-center justify-evenly sticky m-0 p-1 rounded-full text-slate-900 font-sans bg-slate-200">
            <Link href="#home" className="p-2 rounded-2xl hover:bg-slate-100 active:bg-slate-100">Home</Link>
            <Link href="#about" className="p-2 rounded-2xl hover:bg-slate-100 active:bg-slate-100">About</Link>
            <Link href="#projects" className="p-2 rounded-2xl hover:bg-slate-100 active:bg-slate-100">Projects</Link>
            <Link href="#contacts" className="p-2 rounded-2xl hover:bg-slate-100 active:bg-slate-100">Contacts</Link>
        </nav>
    );
}