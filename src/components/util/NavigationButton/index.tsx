import React from "react";
import { hover } from "./styles.module.css";
import { TSize } from "../../../types/componentTypes";
import { Link } from "gatsby";
import { Text } from "../Text";

interface NavigationButtonProps {
    className?: string,
    destination: string,
    label: string,
    size?: TSize
}

export const NavigationButton: React.FC<NavigationButtonProps> = ({
    className,
    destination,
    label,
    size = "medium",
    children
}) => {
    return (
        <Link to={destination} className={`${className}`}>
            { label !== "" &&
                <Text className={`${hover}`} text={label} size={size} isAnimated={true}/>
            }
            { children }
        </Link>
    );
}
