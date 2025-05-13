import { useState,useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./LoadingScreen.module.css";

const LoadingScreen=()=>{
    const nameRef = useRef<HTMLHeadingElement>(null);
    const screenRef=useRef<HTMLDivElement | null>(null);
    const [progress,setProgress]=useState<number>(0);
    const [loader,setLoader]=useState<boolean>(
        typeof window!=="undefined"? sessionStorage.getItem("visited")!=="true":true
    )
    useEffect(() => {
        if(!loader) return;
        if (nameRef.current) {
            gsap.fromTo(
                nameRef.current,
                { opacity: 0, y: 30 }, // start 50px lower and invisible
                {
                    opacity: 1,
                    y: 0,                // animate to normal position
                    duration: 1.2,
                    ease: "power3.out"
                }
            );
        }
        const interval=setInterval(()=>{
            setProgress((prev)=>{
                if(prev>=100){
                    clearInterval(interval);

                    gsap.to(screenRef.current,{
                        opacity:0,
                        duration:1,
                        onComplete:()=>{
                            setLoader(false);
                            sessionStorage.setItem("visited","true");
                        }
                    });
                    return 100;
                }
                return prev+1;
            });
        },30);

        return()=>clearInterval(interval);
    }, [loader]);
    if(!loader) return null;
    return(
        <div ref={screenRef} className={styles.LoadingScreen}>
            <h1 ref={nameRef} className={styles.name}>Subodhini 💻  </h1>
            <div className={styles.loader}>{progress}%</div>
        </div>
    );
};

export default LoadingScreen;