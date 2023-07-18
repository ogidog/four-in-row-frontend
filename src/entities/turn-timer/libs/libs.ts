type Props = {
    fill: string
}
export const getImgSrc = ({fill}: Props) => {
    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="83" height="77">
        <filter id="f1">
            <feDropShadow dx="0" dy="3.8" color="#000000" stdDeviation="0.0"></feDropShadow>
        </filter>
        <g transform="translate(1,-1)">
            <path d="M80.5 57.64 L80.5 28.16 C80.35 25.89 80.07 24.28 78.88 22.32 C77.66 20.32 75.48 17.95 72.99 16.82 L55.28 7.75
                             C46.49 3.36 43.43 2.42 40.37 2.09 C37.19 1.75 34.02 2.08 24.09 7.75 L7.94 16.82 C6.66 17.67 4.32 18.64 2.7
                             20.35 C0.92 22.21 0 24.97 0 28.16 L0 57.64 C0 61.18 -0 66.14 3.89 68.79 C8.33 71.81 17.86 71.81 23.81 71.81
                             L56.69 71.81 C62.65 71.81 72.17 71.81 76.62 68.79 C80.5 66.14 80.5 61.18 80.5 57.64 z"
                  fill="${fill}" stroke-width="1.2" stroke="#000000" filter="url(#f1)"/>
        </g>
    </svg>
    `

    const blob = new Blob([svg], {type: 'image/svg+xml'});
    const url = URL.createObjectURL(blob);

    return url;
}