import { useEffect, useRef, useState } from "react";

const MAXIMUN_COUNT= 10;
export const useCounter = () => {
    const [counter, setCounter] = useState(5);

    const counterElement = useRef<HTMLHeadingElement>(null);


    const handleClick = () => {

        setCounter(prev => Math.min(prev + 1, ));

    }

    useEffect(() => {
        if (counter < 10) {
            return;
        }

        console.log('%cSE LLEGO AL VALOR MAXIMO', 'color:red; background-color: black;');

        const tl = gsap.timeline();

        tl.to(counterElement.current, {y: -10, duration: 0.2, ease: 'ease.out'})
        tl.to(counterElement.current, {y: 0, duration: 1, ease: 'bonce.out'})      


    }, [counter])
    return {
        counter,
        counterElement,
        handleClick,

    }
}