import type { SVGProps } from 'react'

export function IconArchive(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='1rem' height='1rem' viewBox='0 0 16 16' {...props}>
            <path
                fill='currentColor'
                d={`
                    M4.03 5.507a4 4 0 0 1 7.94 0A3.248 3.248 0 0 1 14.49 7H8a2 2 0 0 0-1 3.732V12H4.25a3.25 3.25 0 0 1-.22-6.493
                    M8 8a1 1 0 0 0 0 2h7a1 1 0 1 0 0-2zm7 3H8v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2zm-5 1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5
                `}
            ></path>
        </svg>
    )
}
