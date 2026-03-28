// @ts-nocheck
import type { SVGProps } from 'react'

export function IconBellUrgent(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" {...props}>
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={2}>
                <g>
                    <path strokeDasharray={4} strokeDashoffset={4} d="M12 3V5">
                        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="4;0"></animate>
                    </path>
                    <path
                        fill="currentColor"
                        fillOpacity={0}
                        strokeDasharray={28}
                        strokeDashoffset={28}
                        d="M12 5C8.68629 5 6 7.68629 6 11L6 17C5 17 4 18 4 19H12M12 5C15.3137 5 18 7.68629 18 11L18 17C19 17 20 18 20 19H12"
                    >
                        <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            begin="0.2s"
                            dur="0.4s"
                            values="28;0"
                        ></animate>
                        <animate
                            fill="freeze"
                            attributeName="fill-opacity"
                            begin="0.8s"
                            dur="0.15s"
                            values="0;0.3"
                        ></animate>
                    </path>
                    <animateTransform
                        attributeName="transform"
                        begin="0.8s"
                        dur="6s"
                        keyTimes="0;0.05;0.15;0.2;1"
                        repeatCount="indefinite"
                        type="rotate"
                        values="0 12 3;3 12 3;-3 12 3;0 12 3;0 12 3"
                    ></animateTransform>
                </g>
                <path
                    strokeDasharray={8}
                    strokeDashoffset={8}
                    d="M10 20C10 21.1046 10.8954 22 12 22C13.1046 22 14 21.1046 14 20"
                >
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.6s"
                        dur="0.2s"
                        values="8;0"
                    ></animate>
                    <animateTransform
                        attributeName="transform"
                        begin="1s"
                        dur="6s"
                        keyTimes="0;0.05;0.15;0.2;1"
                        repeatCount="indefinite"
                        type="rotate"
                        values="0 12 8;6 12 8;-6 12 8;0 12 8;0 12 8"
                    ></animateTransform>
                </path>
                <path strokeDasharray={8} strokeDashoffset={8} d="M22 6v4" opacity={0}>
                    <set attributeName="opacity" begin="1s" to={1}></set>
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="1s"
                        dur="0.2s"
                        values="8;0"
                    ></animate>
                    <animate
                        attributeName="stroke-width"
                        begin="1.7s"
                        dur="3s"
                        keyTimes="0;0.1;0.2;0.3;1"
                        repeatCount="indefinite"
                        values="2;3;3;2;2"
                    ></animate>
                </path>
            </g>
            <circle cx={22} cy={14} r={1} fill="currentColor" fillOpacity={0}>
                <animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.4s" values="0;1"></animate>
                <animate
                    attributeName="r"
                    begin="2s"
                    dur="3s"
                    keyTimes="0;0.1;0.2;0.3;1"
                    repeatCount="indefinite"
                    values="1;2;2;1;1"
                ></animate>
            </circle>
        </svg>
    )
}

export function IconBell(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
            <path
                fill="currentColor"
                d="m6.14 14.969l2.828 2.828a2 2 0 1 1-2.828-2.828m8.867 5.325l-.706.706L3 9.699l.706-.706l1.102.157c.754.108 1.689-.122 2.077-.51l3.885-3.884a5.993 5.993 0 0 1 8.475 8.475l-3.885 3.885c-.388.388-.618 1.323-.51 2.077z"
            ></path>
        </svg>
    )
}
