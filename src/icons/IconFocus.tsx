// @ts-nocheck
import type { SVGProps } from 'react'

export function IconFocus(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='1rem' height='1rem' viewBox='0 0 24 24' {...props}>
            <g fill='none' stroke='currentColor' strokeLinecap='round' strokeWidth={2}>
                <path
                    strokeDasharray={56}
                    strokeDashoffset={56}
                    d='M12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4Z'
                >
                    <animate fill='freeze' attributeName='stroke-dashoffset' dur='0.5s' values='56;0'></animate>
                </path>
                <path d='M12 4v0M20 12h0M12 20v0M4 12h0' opacity={0}>
                    <set attributeName='opacity' begin='0.9s' to={1}></set>
                    <animate
                        fill='freeze'
                        attributeName='d'
                        begin='0.9s'
                        dur='0.2s'
                        values='M12 4v0M20 12h0M12 20v0M4 12h0;M12 4v-2M20 12h2M12 20v2M4 12h-2'
                    ></animate>
                </path>
            </g>
            <circle cx={12} cy={12} r={0} fill='currentColor' fillOpacity={0}>
                <set attributeName='fill-opacity' begin='0.6s' to={1}></set>
                <animate fill='freeze' attributeName='r' begin='0.6s' dur='0.2s' values='0;4'></animate>
            </circle>
        </svg>
    )
}



export function IconFocusStatic(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M11 22.95v-2q-3.125-.35-5.363-2.587T3.05 13h-2v-2h2q.35-3.125 2.588-5.363T11 3.05v-2h2v2q3.125.35 5.363 2.588T20.95 11h2v2h-2q-.35 3.125-2.587 5.363T13 20.95v2zM12 19q2.9 0 4.95-2.05T19 12t-2.05-4.95T12 5T7.05 7.05T5 12t2.05 4.95T12 19m0-3q-1.65 0-2.825-1.175T8 12t1.175-2.825T12 8t2.825 1.175T16 12t-1.175 2.825T12 16"></path></svg>);
}