import * as React from "react"
export function Share (props) {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        width= '32px'
        height= '32px'
        viewBox="0 0 48 48"
        {...props}
      >
        <g clipPath="url(#b)" filter="url(#a)">
          <path
            fill="#fff"
            fillOpacity={0.9}
            fillRule="evenodd"
            d="M25.6 4a2 2 0 0 0-2.2-.3 2 2 0 0 0-1.2 1.8v8.3a20 20 0 0 0-13.4 5.7A23.1 23.1 0 0 0 3 36.2 2 2 0 0 0 4.2 38a2 2 0 0 0 2.2-.4c3.3-3.3 7.6-4.6 11.2-5 1.8-.2 3.4-.2 4.5 0h.1v9a2 2 0 0 0 1.2 1.7 2 2 0 0 0 2.1-.3l18.9-17.5a2 2 0 0 0 0-2.8L25.6 4Z"
            clipRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id="b">
            <path fill="#fff" d="M0 0h48v48H0z" />
          </clipPath>
          <filter
            id="a"
            width={51}
            height={49}
            x={-1.5}
            y={0.5}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy={1.5} />
            <feGaussianBlur stdDeviation={2.3} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_81245_5665"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy={1.5} />
            <feGaussianBlur stdDeviation={0.8} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
            <feBlend
              in2="effect1_dropShadow_81245_5665"
              result="effect2_dropShadow_81245_5665"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect2_dropShadow_81245_5665"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    )
}
