import type { SVGProps } from 'react'

export function IconThreeDots(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='0.44rem' height='1rem' viewBox='0 0 7 16' {...props}>
            <circle cx={3.5} cy={3.5} r={1.5} fill='currentColor'></circle>
            <circle cx={3.5} cy={8.5} r={1.5} fill='currentColor'></circle>
            <circle cx={3.5} cy={13.5} r={1.5} fill='currentColor'></circle>
        </svg>
    )
}



export function IconThreeDotsHorizont(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" {...props}><path fill="currentColor" d="M3 9.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></path></svg>);
}