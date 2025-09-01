import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

interface redirlinkprops {
    pathName: string,
    label: string,
    class?: string,
}

export const Redirlink = component$<redirlinkprops>(({pathName, label, class: className}) => {

    return (
        <Link 
            href={pathName as string}
            class={`underline text-blue-500 hover:text-blue-400 active:text-cyan-600 visited:text-violet-500 ${className}`}
        >
            {label}
        </Link>
    );
});