import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import { TLSSocket } from 'tls';


const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {
    const [counter, setCounter] = useState(5);

    const counterElement = useRef<HTMLHeadingElement>(null);


    const handleClick = () => {

        setCounter(prev => Math.min(prev + 1, MAXIMUN_COUNT));

    }

    useEffect(() => {
        if (counter < 10) {
            return;
        }

        console.log('%cSE LLEGO AL VALOR MAXIMO', 'color:red; background-color: black;');

        const tl = gsap.timeline();

        tl.to(counterElement.current, {y: -10, duration: 0.2, ease: 'ease.out'})
        tl.to(counterElement.current, {y: 0, duration: 1, ease: 'bonce.out'})

        // gsap.to(counterElement.current, {y: -10, duration: 0.2, ease: 'ease.out'}).then (()=> {
        //     gsap.to(counterElement.current, {y: 0, duration: 1, ease: 'bonce.out'})
        // });


    }, [counter])

    return (
        <>
            <h1>Counter:</h1>
            <h2 ref={counterElement}> {counter}</h2>
            <button onClick={handleClick}>
                +1
            </button>
        </>
    )
}
