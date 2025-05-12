import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./LoadingScreen.module.css";
const LoadingScreen=()=>{
    const nameRef = useRef<HTMLHeadingElement>(null);
    useEffect(() => {
        if (nameRef.current) {
            gsap.fromTo(
                nameRef.current,
                { opacity: 0, y: 50 }, // start 50px lower and invisible
                {
                    opacity: 1,
                    y: 0,                // animate to normal position
                    duration: 2,
                    ease: "power3.out",
                    onComplete: () => {
                        setTimeout(() => {
                            document.body.classList.add("loaded");
                        }, 500);
                    },
                }
            );
        }
    }, []);
    return(
        <div className={styles.loadingScreen}>
            <h1 className={styles.name} ref={nameRef}>Subodhini</h1>
        </div>
    );
};

export default LoadingScreen;