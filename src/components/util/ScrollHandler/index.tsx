import React, { useEffect } from "react";
import { useReferredState } from "../../../util/hooks";
import { TScrollDirection } from "../../../types/componentTypes";

interface ScrollHandlerProps {
    toggleDirection: () => void,
    toggleTop?: () => void | null
}

export const ScrollHandler: React.FC<ScrollHandlerProps> = ({
    toggleDirection,
    toggleTop = null,
    children
}) => {
    const topMargin = 20;
    const throttleDelay = 20;

    const [direction, setDirection] = useReferredState<TScrollDirection>("down");
    const [isTop, setIsTop] = useReferredState<boolean>(true);
    const [prevScrollY, setPrevScrollY] = useReferredState<number>(0);

    useEffect(() => {
        checkTopInitial();
        window.removeEventListener("scroll", checkDirectionThrottled);
        window.addEventListener("scroll", checkDirectionThrottled, { passive: true });
        return () => window.removeEventListener("scroll", checkDirectionThrottled);
    }, []);

    function checkTopInitial() {
        const scrollY = window.scrollY;
        setPrevScrollY(scrollY);
        checkTop();
    }

    let isThrottled = false;
    function checkDirectionThrottled() {
        // if(toggleTop !== null) {
        //     checkTop();
        // }
        if(!isThrottled) {
            isThrottled = true;
            checkDirection();
            setTimeout(() => {
                checkTop();
                isThrottled = false;
            }, throttleDelay);
        }
    }
    
    function checkTop() {
        const scrollY = window.scrollY;
        if(scrollY <= topMargin) {
            updateDirection("down");
        }
        if(scrollY <= topMargin && !isTop.current) {
            setIsTop(true);
            toggleTopWithCheck();
        }
        if(scrollY > topMargin && isTop.current) {
            setIsTop(false);
            toggleTopWithCheck();
        }
    }

    function checkDirection() {
        const scrollY = window.scrollY;
        if(scrollY < prevScrollY.current) {
            updateDirection("up");
        }
        if(scrollY > prevScrollY.current) {
            updateDirection("down");
        }
        setPrevScrollY(scrollY);
    }

    function toggleTopWithCheck() {
        if(toggleTop !== null) {
            toggleTop();
        }
    }

    function updateDirection(newDirection: TScrollDirection) {
        if(newDirection === direction.current) return;

        setDirection(newDirection);
        toggleDirection();
    }

    return (
        <>{children}</>
    );
}