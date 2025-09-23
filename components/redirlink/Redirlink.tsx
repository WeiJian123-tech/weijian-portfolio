import Link from "next/link";

interface redirlinkprops {
    pathName: string,
    label: string,
    className?: string,
}

export default function Redirlink({pathName, label, className}: redirlinkprops) {
    return (
        <Link 
            href={pathName}
            className={`underline text-blue-500 hover:text-blue-400 active:text-cyan-600 visited:text-violet-500 ${className} `}
        >
            {label}
        </Link>
    );
}