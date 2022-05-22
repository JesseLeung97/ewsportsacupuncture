import React from "react";

interface LocationProps {
    className?: string
}

const Location: React.FC<LocationProps> = ({
    className = ""
}) => {
    return (
        <svg 
            className={className}
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            focusable="false" 
            width="24" 
            height="24">
            <path 
                fill="inherit"
                d="M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z" 
                fillOpacity="0.92">
            </path>
        </svg>
    );
}

export default Location;