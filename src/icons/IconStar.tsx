import type { SVGProps } from 'react'

export function IconFilledStarAnimated(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
            <path
                fill="currentColor"
                fillOpacity={0}
                d="M12 3l2.35 5.76l6.21 0.46l-4.76 4.02l1.49 6.04l-5.29 -3.28l-5.29 3.28l1.49 -6.04l-4.76 -4.02l6.21 -0.46Z"
            >
                <animate fill="freeze" attributeName="fill-opacity" begin="0.5s" dur="0.5s" values="0;1"></animate>
            </path>
            <path
                fill="none"
                stroke="currentColor"
                strokeDasharray={36}
                strokeDashoffset={36}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3l-2.35 5.76l-6.21 0.46l4.76 4.02l-1.49 6.04l5.29 -3.28M12 3l2.35 5.76l6.21 0.46l-4.76 4.02l1.49 6.04l-5.29 -3.28"
            >
                <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="36;0"></animate>
            </path>
        </svg>
    )
}

export function IconTwoToneStarAnimated(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
            <path
                fill="currentColor"
                fillOpacity={0}
                d="M12 3l2.35 5.76l6.21 0.46l-4.76 4.02l1.49 6.04l-5.29 -3.28l-5.29 3.28l1.49 -6.04l-4.76 -4.02l6.21 -0.46Z"
            >
                <animate fill="freeze" attributeName="fill-opacity" begin="0.5s" dur="0.15s" values="0;0.3"></animate>
            </path>
            <path
                fill="none"
                stroke="currentColor"
                strokeDasharray={36}
                strokeDashoffset={36}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3l-2.35 5.76l-6.21 0.46l4.76 4.02l-1.49 6.04l5.29 -3.28M12 3l2.35 5.76l6.21 0.46l-4.76 4.02l1.49 6.04l-5.29 -3.28"
            >
                <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="36;0"></animate>
            </path>
        </svg>
    )
}

export function IconUnfilledStarAnimated(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
            <path
                fill="none"
                stroke="currentColor"
                strokeDasharray={36}
                strokeDashoffset={36}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3l-2.35 5.76l-6.21 0.46l4.76 4.02l-1.49 6.04l5.29 -3.28M12 3l2.35 5.76l6.21 0.46l-4.76 4.02l1.49 6.04l-5.29 -3.28"
            >
                <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="36;0"></animate>
            </path>
        </svg>
    )
}

export function IconFilledStar(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
            <path
                fill="currentColor"
                d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z"
            ></path>
        </svg>
    )
}

export function IconUnfilledStar(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
            <path
                fill="currentColor"
                d="m8.85 16.825l3.15-1.9l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4l-1.45 3.375l-3.65.325l2.775 2.425zm3.15.45l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15zm0-5.025"
            ></path>
        </svg>
    )
}
