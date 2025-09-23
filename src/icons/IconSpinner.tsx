import type { SVGProps } from 'react'

export function IconSpinnerBarsScaleFade(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
            <rect width={6} height={14} x={1} y={4} fill="currentColor">
                <animate
                    id="SVGBoZ3Ab9F"
                    fill="freeze"
                    attributeName="y"
                    begin="0;SVG0XJl4OCs.end-0.25s"
                    dur="0.75s"
                    values="1;5"
                ></animate>
                <animate
                    fill="freeze"
                    attributeName="height"
                    begin="0;SVG0XJl4OCs.end-0.25s"
                    dur="0.75s"
                    values="22;14"
                ></animate>
                <animate
                    fill="freeze"
                    attributeName="opacity"
                    begin="0;SVG0XJl4OCs.end-0.25s"
                    dur="0.75s"
                    values="1;0.2"
                ></animate>
            </rect>
            <rect width={6} height={14} x={9} y={4} fill="currentColor" opacity={0.4}>
                <animate
                    fill="freeze"
                    attributeName="y"
                    begin="SVGBoZ3Ab9F.begin+0.15s"
                    dur="0.75s"
                    values="1;5"
                ></animate>
                <animate
                    fill="freeze"
                    attributeName="height"
                    begin="SVGBoZ3Ab9F.begin+0.15s"
                    dur="0.75s"
                    values="22;14"
                ></animate>
                <animate
                    fill="freeze"
                    attributeName="opacity"
                    begin="SVGBoZ3Ab9F.begin+0.15s"
                    dur="0.75s"
                    values="1;0.2"
                ></animate>
            </rect>
            <rect width={6} height={14} x={17} y={4} fill="currentColor" opacity={0.3}>
                <animate
                    id="SVG0XJl4OCs"
                    fill="freeze"
                    attributeName="y"
                    begin="SVGBoZ3Ab9F.begin+0.3s"
                    dur="0.75s"
                    values="1;5"
                ></animate>
                <animate
                    fill="freeze"
                    attributeName="height"
                    begin="SVGBoZ3Ab9F.begin+0.3s"
                    dur="0.75s"
                    values="22;14"
                ></animate>
                <animate
                    fill="freeze"
                    attributeName="opacity"
                    begin="SVGBoZ3Ab9F.begin+0.3s"
                    dur="0.75s"
                    values="1;0.2"
                ></animate>
            </rect>
        </svg>
    )
}

export function IconSpinnerPulseRing(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
            <path
                fill="currentColor"
                d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
                transform="matrix(0 0 0 0 12 12)"
            >
                <animateTransform
                    attributeName="transform"
                    calcMode="spline"
                    dur="1.2s"
                    keySplines=".52,.6,.25,.99"
                    repeatCount="indefinite"
                    type="translate"
                    values="12 12;0 0"
                ></animateTransform>
                <animateTransform
                    additive="sum"
                    attributeName="transform"
                    calcMode="spline"
                    dur="1.2s"
                    keySplines=".52,.6,.25,.99"
                    repeatCount="indefinite"
                    type="scale"
                    values="0;1"
                ></animateTransform>
                <animate
                    attributeName="opacity"
                    calcMode="spline"
                    dur="1.2s"
                    keySplines=".52,.6,.25,.99"
                    repeatCount="indefinite"
                    values="1;0"
                ></animate>
            </path>
        </svg>
    )
}
