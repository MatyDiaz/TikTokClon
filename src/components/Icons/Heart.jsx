export const Heart = (props) => (
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
        d="M15 4.5c6 0 9 4 9 4s3-4 9-4c7 0 12 5.5 12 12.5 0 8-6.5 15.1-12.5 20.5C28.8 40.8 26 43 24 43s-4.9-2.2-8.5-5.5C9.6 32.1 3 25 3 17 3 10 8 4.5 15 4.5Z"
        clipRule="evenodd"
        shapeRendering="crispEdges"
      />
    </g>
    <defs>
      <clipPath id="b">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
      <filter
        id="a"
        width={51}
        height={47.5}
        x={-1.5}
        y={1.5}
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
          result="effect1_dropShadow_81245_5661"
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
          in2="effect1_dropShadow_81245_5661"
          result="effect2_dropShadow_81245_5661"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_81245_5661"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)