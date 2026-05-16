// @ts-nocheck
import type { SVGProps } from 'react'

export function IconFocus(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" {...props}>
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={2}>
                <path
                    strokeDasharray={56}
                    strokeDashoffset={56}
                    d="M12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4Z"
                >
                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="56;0"></animate>
                </path>
                <path d="M12 4v0M20 12h0M12 20v0M4 12h0" opacity={0}>
                    <set attributeName="opacity" begin="0.9s" to={1}></set>
                    <animate
                        fill="freeze"
                        attributeName="d"
                        begin="0.9s"
                        dur="0.2s"
                        values="M12 4v0M20 12h0M12 20v0M4 12h0;M12 4v-2M20 12h2M12 20v2M4 12h-2"
                    ></animate>
                </path>
            </g>
            <circle cx={12} cy={12} r={0} fill="currentColor" fillOpacity={0}>
                <set attributeName="fill-opacity" begin="0.6s" to={1}></set>
                <animate fill="freeze" attributeName="r" begin="0.6s" dur="0.2s" values="0;4"></animate>
            </circle>
        </svg>
    )
}

export function IconFocusStatic(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
            <path
                fill="currentColor"
                d="M11 22.95v-2q-3.125-.35-5.363-2.587T3.05 13h-2v-2h2q.35-3.125 2.588-5.363T11 3.05v-2h2v2q3.125.35 5.363 2.588T20.95 11h2v2h-2q-.35 3.125-2.587 5.363T13 20.95v2zM12 19q2.9 0 4.95-2.05T19 12t-2.05-4.95T12 5T7.05 7.05T5 12t2.05 4.95T12 19m0-3q-1.65 0-2.825-1.175T8 12t1.175-2.825T12 8t2.825 1.175T16 12t-1.175 2.825T12 16"
            ></path>
        </svg>
    )
}

import React from 'react'
import type { SVGProps } from 'react'

export function IconFocusFlag(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                <path d="M12 13V2l8 4l-8 4"></path>
                <path d="M20.561 10.222a9 9 0 1 1-12.55-5.29"></path>
                <path d="M8.002 9.997a5 5 0 1 0 8.9 2.02"></path>
            </g>
        </svg>
    )
}

export function IconFocusTarget(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M5.623 12.505a.34.34 0 0 0 .31-.35a.33.33 0 0 0-.35-.31a18.6 18.6 0 0 0-3.42-.1c-.31 0-.85 0-1.31.11q-.324.045-.63.16a.29.29 0 1 0 .15.56c.41 0 1.4.22 1.79.27s3.19-.3 3.46-.34m18.047-1.23c-4.53-.38-2.89-.22-6.45.23a.28.28 0 0 0-.28.29a.29.29 0 0 0 .29.29s-1.12.49 6.44-.15a.33.33 0 0 0 0-.66M10.421 3.676a9.12 9.12 0 0 0-5.949 3.93a7.9 7.9 0 0 0-1.21 2.799c.16.7.47.53.85 0a6.8 6.8 0 0 1 1.09-2.27a8.23 8.23 0 0 1 5.24-3.37c.67-.34.85-.69-.02-1.09m2.249-.599c-.06-.9-.18-1.59-.22-2a.29.29 0 0 0-.28-.3a.3.3 0 0 0-.3.29a14.9 14.9 0 0 0 0 5.66a.33.33 0 0 0 .34.32a.32.32 0 0 0 .32-.33c.144-1.208.191-2.425.14-3.64M19 6.725a9.25 9.25 0 0 0-5.289-3c-.8.35-.67.73 0 1.14a8 8 0 0 1 4.4 2.58a8.3 8.3 0 0 1 1.5 2.65c.44.74.8.63 1.109 0A9.5 9.5 0 0 0 19 6.725m-6.209 12.899c-.07-.56-.19-1.12-.27-1.74a.29.29 0 0 0-.29-.29a.28.28 0 0 0-.29.29q-.168.994-.22 2a16.3 16.3 0 0 0 .25 3a.34.34 0 0 0 .32.34a.33.33 0 0 0 .34-.32c.42-2.83.17-3.18.16-3.28M20 13.594a7.4 7.4 0 0 1-.52 2a7.86 7.86 0 0 1-5.48 4.5c-.639.38-.649.65 0 .79a8.69 8.69 0 0 0 6.4-4.87a8.4 8.4 0 0 0 .65-2.41c-.37-.66-.71-.8-1.05-.01m-15.828 0c.074.689.249 1.363.52 2a7.84 7.84 0 0 0 5.48 4.49c.64.38.65.65 0 .79a8.67 8.67 0 0 1-6.36-4.86a8 8 0 0 1-.66-2.41c.37-.66.72-.8 1.02-.01"
                clip-rule="evenodd"
            />
        </svg>
    )
}
