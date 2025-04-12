import type { SVGProps } from 'react'

export function IconPersonRound(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' {...props}>
            <g fill='currentColor'>
                <path d='M11 6a3 3 0 1 1-6 0a3 3 0 0 1 6 0'></path>
                <path
                    fillRule='evenodd'
                    d={`
                        M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1
                    `}
                ></path>
            </g>
        </svg>
    )
}


export function IconPersonRound2(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={512} height={512} viewBox="0 0 512 512" {...props}><path fill="currentColor" fillRule="evenodd" d="M256 42.667A213.333 213.333 0 0 1 469.334 256c0 117.821-95.513 213.334-213.334 213.334c-117.82 0-213.333-95.513-213.333-213.334C42.667 138.18 138.18 42.667 256 42.667m21.334 234.667h-42.667c-52.815 0-98.158 31.987-117.715 77.648c30.944 43.391 81.692 71.685 139.048 71.685s108.104-28.294 139.049-71.688c-19.557-45.658-64.9-77.645-117.715-77.645M256 106.667c-35.346 0-64 28.654-64 64s28.654 64 64 64s64-28.654 64-64s-28.653-64-64-64"></path></svg>);
}
