import React from "react";
import { TSize, TTextAligment, TResponsiveTextAlignment } from "../../../types/componentTypes";
import { small, medium, large, left, right, center, sp_left, sp_right, sp_center } from "./styles.module.css";
import { useAlignment, useSize } from "../../../util/hooks";

interface TextProps {
    className?: string,
    text: string,
    lineStyle?: "block" | "inline",
    size?: TSize,
    alignment?: TResponsiveTextAlignment, 
    isAnimated?: boolean,
}

export const Text: React.FC<TextProps> = ({
    className,
    text,
    lineStyle = "inline",
    size = "medium",
    alignment = { "regularAlignment": "left", "smartphoneAlignment": "left" },
    isAnimated = false
}) => {

    const textSize = useSize(size, {small, medium, large});
    const textAlignment = useAlignment(alignment, {left, right, center, spLeft: sp_left, spRight: sp_right, spCenter: sp_center});

    return (
        <>
        { lineStyle === "inline" && 
            <span className={`${className ?? ""} ${textSize} ${textAlignment}`}>{text}</span> }
        { lineStyle === "block" && 
            <div className={`${className ?? ""} ${textSize} ${textAlignment}`}>{text}</div> }
        </>
    );
}