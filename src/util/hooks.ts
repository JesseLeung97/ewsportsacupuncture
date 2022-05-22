import React, { useRef, useState } from "react";
import { MutableRefObject, Dispatch } from "react";
import { TResponsiveTextAlignment, TSize, TTextAligment } from "../types/componentTypes";

const useReferredState = <T>(initialValue: T): [MutableRefObject<T>, Dispatch<T>] => {
    const [state, setState] = useState<T>(initialValue);
    const reference = useRef<T>(state);

    const setReferredState = (value: T) => {
        reference.current = value;
        setState(value);
    }

    return [reference, setReferredState];
}

const useSize = (size: TSize, classes: {small: string, medium: string, large: string}): string => {
    switch(size) {
        case "small":
            return classes.small;
        case "large":
            return classes.large;
        case "medium":
        default:
            return classes.medium;
    }
}

const useAlignment = (alignment: TResponsiveTextAlignment, classes: {left: string, right: string, center: string, spLeft: string, spRight: string, spCenter: string}): string => {
    function getRegularAlignment(regAlign: TTextAligment) {
        switch(regAlign) {
            case "right":
                return classes.right;
            case "center":
                return classes.center;
            case "left":
            default:
                return classes.left;
        }
    }
    function getSmartphoneAlignment(spAlign: TTextAligment) {
        switch(spAlign) {
            case "right":
                return classes.spRight;
            case "center":
                return classes.spCenter;
            case "left":
            default:
                return classes.spLeft;
        }
    }
    return `${getRegularAlignment(alignment.regularAlignment)} ${getSmartphoneAlignment(alignment.smartphoneAlignment)}`;
}

 export {
     useReferredState,
     useSize,
     useAlignment
}

