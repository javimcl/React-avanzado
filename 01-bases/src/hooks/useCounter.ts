import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from 'gsap';


export const useCounter = ({ maxcount = 10 }) => {
    const [counter, setCounter] = useState(5);

    const elementToAnimate = useRef<HTMLHeadingElement>(null);

    const tl = useRef(gsap.timeline());


    const handleClick = () => {

        setCounter(prev => Math.min(prev + 1, maxcount));

    }

    useLayoutEffect(() => {

        // if (counter < 10) {
        //     return;
        // }

        // console.log('%cSE LLEGO AL VALOR MAXIMO', 'color:red; background-color: black;');

        // const tl = gsap.timeline();

        if (!elementToAnimate.current) {
            return;
        }

        tl.current.to(elementToAnimate.current, { y: -10, duration: 0.2, ease: 'ease.out' })
        tl.current.to(elementToAnimate.current, { y: 0, duration: 1, ease: 'bonce.out' })
            .pause();


    }, [counter])

    useEffect(() => {

        
        tl.current.play(0);

    }, [counter])


    return {
        counter,
        elementToAnimate,
        handleClick,

    }
}