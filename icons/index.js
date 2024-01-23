import { SvgXml } from "react-native-svg";

export const MsgIcon = ({color})=>{
    const svgImg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
        <path d="M17.3 9C17.3 12.87 13.94 16 9.80005 16L8.87006 17.12L8.32005 17.78C7.85005 18.34 6.95005 18.22 6.64005 17.55L5.30005 14.6C3.48005 13.32 2.30005 11.29 2.30005 9C2.30005 5.13 5.66005 2 9.80005 2C12.82 2 15.4301 3.67001 16.6001 6.07001C17.0501 6.96001 17.3 7.95 17.3 9Z" stroke=${color ? color : "#B3B3B3"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22.3 12.86C22.3 15.15 21.12 17.18 19.3 18.46L17.9601 21.41C17.6501 22.08 16.75 22.21 16.28 21.64L14.8 19.86C12.38 19.86 10.2201 18.79 8.87006 17.12L9.80005 16C13.94 16 17.3 12.87 17.3 9C17.3 7.95 17.0501 6.96001 16.6001 6.07001C19.8701 6.82001 22.3 9.57999 22.3 12.86Z" stroke=${color ? color : "#B3B3B3"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.30005 9H12.3" stroke=${color ? color : "#B3B3B3"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `
    return <SvgXml xml={svgImg} width={24} height={24}/>
}

export const Tab1Icon1 = ({color})=>{
    const svgImg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
    <path d="M19.22 12C21.82 12 22.9 11 21.94 7.72C21.29 5.51 19.39 3.61 17.18 2.96C13.9 2 12.9 3.08 12.9 5.68V8.56C12.9 11 13.9 12 15.9 12H19.22Z" stroke=${color ? color : "#B3B3B3"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M20.9 14.7C19.97 19.33 15.53 22.69 10.48 21.87C6.69002 21.26 3.64002 18.21 3.02002 14.42C2.21002 9.39001 5.55002 4.95001 10.16 4.01001" stroke=${color ? color : "#B3B3B3"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
    `
    return <SvgXml xml={svgImg} width={24} height={24}/>
}
export const Tab1Icon2 = ({color})=>{
    const svgImg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
        <path d="M16.7 22H9.70001C6.70001 22 4.70001 20 4.70001 17V7C4.70001 4 6.70001 2 9.70001 2H16.7C19.7 2 21.7 4 21.7 7V17C21.7 20 19.7 22 16.7 22Z" stroke=${color ? color : "#B3B3B3"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.70001 15H21.7" stroke=${color ? color : "#B3B3B3"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.70001 12H8.70001" stroke=${color ? color : "#B3B3B3"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.70001 9.5H8.70001" stroke=${color ? color : "#B3B3B3"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.70001 7H8.70001" stroke=${color ? color : "#B3B3B3"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17.1945 18.25H17.2035" stroke=${color ? color : "#B3B3B3"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `
    return <SvgXml xml={svgImg} width={24} height={24}/>
}
export const Tab1Icon3 = ({color})=>{
    const svgImg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
    <path d="M12.62 12.78C12.55 12.77 12.46 12.77 12.38 12.78C10.62 12.72 9.21997 11.28 9.21997 9.51001C9.21997 7.70001 10.68 6.23001 12.5 6.23001C14.31 6.23001 15.78 7.70001 15.78 9.51001C15.77 11.28 14.38 12.72 12.62 12.78Z" stroke=${color ? color : "#B3B3B3"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M19.24 19.38C17.46 21.01 15.1 22 12.5 22C9.90001 22 7.54001 21.01 5.76001 19.38C5.86001 18.44 6.46001 17.52 7.53001 16.8C10.27 14.98 14.75 14.98 17.47 16.8C18.54 17.52 19.14 18.44 19.24 19.38Z" stroke=${color ? color : "#B3B3B3"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z" stroke=${color ? color : "#B3B3B3"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `
    return <SvgXml xml={svgImg} width={24} height={24}/>
}
export const Tab1Icon4 = ({color})=>{
    const svgImg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
    <path d="M12.1 22C17.6 22 22.1 17.5 22.1 12C22.1 6.5 17.6 2 12.1 2C6.60004 2 2.10004 6.5 2.10004 12C2.10004 17.5 6.60004 22 12.1 22Z" stroke=${color ? color : "#B3B3B3"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7.85004 12L10.68 14.83L16.35 9.17001" stroke=${color ? color : "#B3B3B3"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `
    return <SvgXml xml={svgImg} width={24} height={24}/>
}