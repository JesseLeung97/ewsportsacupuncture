import React from "react";
import { TSize } from "../../types/componentTypes";
import { useSize } from "../../util/hooks";
import { small, medium, large, sp_small, sp_medium, sp_large, block, inline_block, hover } from "./styles.module.css";

interface LogoProps {
    className?: string,
    lineStyle?: "inline" | "block",
    size?: {regularSize: TSize, smartphoneSize: TSize},
    clickable?: boolean
}

export const Logo: React.FC<LogoProps> = ({
    className,
    lineStyle = "block",
    size = {regularSize: "medium", smartphoneSize: "medium"},
    clickable = false
}) => {

    const regularLogoSize = useSize(size.regularSize, {small, medium, large});
    const smartphoneSize = useSize(size.smartphoneSize, {small: sp_small, medium: sp_medium, large: sp_large});

    function getLineStyle(lineStyle: "inline" | "block") {
        return lineStyle === "block" ? block : inline_block;
    }

    function getClickable(clickable: boolean) {
        return clickable === true ? hover : "";
    }
    
    return (
        <div className={`${className} ${regularLogoSize} ${smartphoneSize} ${getLineStyle(lineStyle)}`}>
            <svg 
                viewBox="0 0 1000 1000" 
                version="1.1" 
                xmlns="http://www.w3.org/2000/svg">
                <title>Logo</title>
                <g 
                    id="Page-1" 
                    stroke="none" 
                    strokeWidth="1" 
                    fill="none" 
                    fillRule="evenodd">
                    <g 
                        id="Group" 
                        transform="translate(0.000000, 0.000000)">
                        <ellipse 
                            id="Oval" 
                            fill="#FFFFFF" 
                            cx="500.4995" 
                            cy="500.498504" 
                            rx="499.5005" 
                            ry="498.504487" />
                        <path 
                            d="M530.5449,864.22234 C628.932187,684.247456 404.86582,438.818497 560.472164,322.018753 C716.078509,205.219009 1036.8277,456.581276 996.52897,384.566937 C911.208517,232.098223 747.474813,129.324356 560.441895,129.324356 C285.069202,129.324356 61.835527,352.727934 61.835527,628.310213 C61.835527,760.125554 112.908254,880.003141 196.330491,969.205508 C247.179882,1005.89236 432.157613,1044.19722 530.5449,864.22234 Z" 
                            id="Oval" 
                            fill="#A41040" 
                            transform="translate(530.917764, 564.662178) rotate(180.000000) translate(-530.917764, -564.662178) "/>
                        <path 
                            d="M468.709373,734.725039 C567.09666,554.792509 343.030292,309.421307 498.636637,192.64905 C654.242982,75.8767927 975.079553,327.08124 934.78082,255.083848 C849.460367,102.651015 685.639286,0 498.606368,0 C223.233675,0 5.67866322e-14,223.351004 5.67866322e-14,498.86843 C5.67866322e-14,630.65275 50.9730552,750.829631 134.395292,840.011006 C185.244684,876.689227 370.322086,914.657569 468.709373,734.725039 Z" 
                            id="Oval" 
                            fill="#29222C"/>
                        <path 
                            d="M840.791842,863.225331 C939.512876,683.250447 714.686435,437.821488 870.820625,321.021744 C1026.95481,204.222 1058.45762,128.327347 870.790253,128.327347 C594.483445,128.327347 370.492521,351.730925 370.492521,627.313204 C370.492521,759.128545 421.738496,879.006132 505.443716,968.208499 C556.465598,1004.89535 742.070807,1043.20022 840.791842,863.225331 Z" 
                            id="Oval" 
                            fill="#A41040" 
                            transform="translate(685.246261, 563.665169) rotate(180.000000) translate(-685.246261, -563.665169) "/>
                        <ellipse 
                            id="Oval" 
                            fill="#29222C" 
                            cx="719.458624" 
                            cy="401.48049" 
                            rx="99.2158526" 
                            ry="99.0180144"/>
                        <ellipse 
                            id="Oval" 
                            fill="#A41040" 
                            cx="250.749251" 
                            cy="599.516519" 
                            rx="99.2158526" 
                            ry="99.0180144"/>
                    </g>
                </g>
            </svg>
        </div>
    );
}