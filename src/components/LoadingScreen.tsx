import { useEffect } from "react";
import gsap from "gsap";
import styles from "./LoadingScreen.module.css";
const LoadingScreen=()=>{
    useEffect(()=>{
        gsap.fromTo(
            ".name",
            {opacity:0},
            {
                opacity:1,
                duration:3,
                onComplete: ()=>{
                    setTimeout(()=>{
                        document.body.classList.add("loaded");
                    },500)
                },
            }
        );
    },[]);
    return(
        <div className={styles.loadingScreen}>
            <h1 className={styles.name}>Subodhini</h1>
        </div>
    );
};

export default LoadingScreen;