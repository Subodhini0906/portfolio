"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap";

const CustomCursor=()=>{
    const cursorRef=useRef<HTMLImageElement>(null);
    useEffect(()=>{
        const moveCursor=(e:MouseEvent)=>{
            if(cursorRef.current){
                gsap.to(cursorRef.current,{
                    x:e.clientX,
                    y:e.clientY,
                    duration:0.15,
                    ease:'power2.out',
                })
            }
        };

        window.addEventListener("mousemove",moveCursor);
        return()=>window.removeEventListener("mousemove",moveCursor);
    },[]);

    return(
        // eslint-disable-next-line @next/next/no-img-element
        <img
      ref={cursorRef}
      src="/cursor/cc2.png"
      alt="Custom Cursor"
      className="fixed top-0 left-0 w-10 h-10 pointer-events-none z-[9999]"
      style={{ transform: 'translate(-60%, -50%)' }}
    />

    )
}

export default CustomCursor;