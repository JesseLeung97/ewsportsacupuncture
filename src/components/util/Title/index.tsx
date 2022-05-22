import React from "react";
import { title, small, medium, large, left, right, center, sp_left, sp_right, sp_center } from "./styles.module.css";
import { TSize, TResponsiveTextAlignment } from "../../../types/componentTypes";
import { useSize, useAlignment } from "../../../util/hooks";

interface TitleProps {
    className?: string,
    text: string,
    size?: TSize,
    lineStyle?: "block" | "inline",
    alignment?: TResponsiveTextAlignment, 
}

export const Title: React.FC<TitleProps> = ({
    className,
    text,
    size = "medium",
    lineStyle = "block",
    alignment = {"regularAlignment": "left", "smartphoneAlignment": "left"}
}) => {
    const titleSize = useSize(size, {small, medium, large});
    const titleAlignment = useAlignment(alignment, {left, right, center, spLeft: sp_left, spRight: sp_right, spCenter: sp_center});

    return (
        <>
        { lineStyle === "block" && 
            <div className={`${className ?? ""} ${title} ${titleSize} ${titleAlignment}`}>{text}</div> }
        { lineStyle === "inline" && 
            <span className={`${className ?? ""} ${title} ${titleSize} ${titleAlignment}`}>{text}</span> }
        </>
        
    );
}