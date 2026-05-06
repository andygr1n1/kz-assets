import type { SVGProps } from 'react'

export function IconHeart(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
            <path fill="currentColor" fillOpacity={0} d="M3.5 11L12 20V7L7 5.5L3.5 7V11Z">
                <animate fill="freeze" attributeName="fill-opacity" begin="0.5s" dur="0.5s" values="0;1"></animate>
            </path>
            <path
                fill="none"
                stroke="currentColor"
                strokeDasharray={30}
                strokeDashoffset={30}
                strokeLinecap="round"
                strokeWidth={2}
                d="M12 8C12 8 12 8 12.7578 7C13.6343 5.84335 14.9398 5 16.5 5C18.9853 5 21 7.01472 21 9.5C21 10.4251 20.7209 11.285 20.2422 12C19.435 13.206 12 21 12 21M12 8C12 8 12 8 11.2422 7C10.3657 5.84335 9.06021 5 7.5 5C5.01472 5 3 7.01472 3 9.5C3 10.4251 3.27914 11.285 3.75777 12C4.56504 13.206 12 21 12 21"
            >
                <animate fill="currentColor" attributeName="stroke-dashoffset" dur="0.5s" values="30;0"></animate>
            </path>
        </svg>
    )
}

export function IconHeartMaterial(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
            <path
                fill="currentColor"
                d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"
            ></path>
        </svg>
    )
}

export function IconHeartOffMaterial(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
            <path
                fill="currentColor"
                d="M1 4.27L2.28 3L20 20.72L18.73 22l-3.55-3.56l-1.73 1.59L12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5c0-.95.23-1.83.63-2.6zM7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 2.57-1.58 4.82-4.21 7.47L5.27 3.45C5.95 3.16 6.7 3 7.5 3"
            ></path>
        </svg>
    )
}

export function IconHeartOutlined(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
            <path
                fill="currentColor"
                d="M11.29 20.66c.2.2.45.29.71.29s.51-.1.71-.29l7.5-7.5c2.35-2.35 2.35-6.05 0-8.41c-2.3-2.28-5.85-2.35-8.21-.2c-2.36-2.15-5.91-2.09-8.21.2c-2.35 2.36-2.35 6.06 0 8.41zM5.21 6.16C6 5.38 7 4.99 8.01 4.99s2.01.39 2.79 1.17l.5.5c.39.39 1.02.39 1.41 0l.5-.5c1.56-1.56 4.02-1.56 5.59 0c1.56 1.57 1.56 4.02 0 5.58l-6.79 6.79l-6.79-6.79a3.91 3.91 0 0 1 0-5.58Z"
            ></path>
        </svg>
    )
}

export function IconHeartFilled(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
            <path
                fill="currentColor"
                d="M11.29 20.69c.2.2.45.29.71.29s.51-.1.71-.29l7.5-7.5c2.35-2.35 2.35-6.05 0-8.41c-2.29-2.29-5.84-2.35-8.21-.2c-2.36-2.15-5.91-2.09-8.21.2c-2.35 2.36-2.35 6.06 0 8.41z"
            ></path>
        </svg>
    )
}
