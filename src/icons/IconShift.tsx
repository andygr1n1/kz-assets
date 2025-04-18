import type { SVGProps } from 'react'

export function IconShift(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='1rem' height='1rem' viewBox='0 0 16 16' {...props}>
            <path
                fill='currentColor'
                d={`
                    M7.27 2.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-3H1.654
                    C.78 10.5.326 9.455.924 8.816z
                `}
            ></path>
        </svg>
    )
}
