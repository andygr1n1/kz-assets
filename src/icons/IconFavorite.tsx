import type { SVGProps } from 'react'

export function IconFavorite(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='1rem' height='1rem' viewBox='0 0 24 24' {...props}>
            <path fill='currentColor' fillOpacity={0} d='M3.5 11L12 20V7L7 5.5L3.5 7V11Z'>
                <animate fill='freeze' attributeName='fill-opacity' begin='0.5s' dur='0.5s' values='0;1'></animate>
            </path>
            <path
                fill='none'
                stroke='currentColor'
                strokeDasharray={30}
                strokeDashoffset={30}
                strokeLinecap='round'
                strokeWidth={2}
                d={`M12 8C12 8 12 8 12.7578 7C13.6343 5.84335 14.9398 5 16.5 5C18.9853 5 21 7.01472 21 9.5C21 10.4251 
                20.7209 11.285 20.2422 12C19.435 13.206 12 21 12 21M12 8C12 8 12 8 11.2422 7C10.3657 5.84335 9.06021 5 
                7.5 5C5.01472 5 3 7.01472 3 9.5C3 10.4251 3.27914 11.285 3.75777 12C4.56504 13.206 12 21 12 21`}
            >
                <animate fill='freeze' attributeName='stroke-dashoffset' dur='0.5s' values='30;0'></animate>
            </path>
        </svg>
    )
}
