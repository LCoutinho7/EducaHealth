'use client'
import { useRouter } from "next/navigation";
import React from "react";
import styles from "./styles.module.css"


export default function Button({ children, onClick, type, redirect }){
    const router = useRouter();

    const click = () => {
        if(redirect){
            router.push(redirect)
        }else{
            onClick();
        }
    }

    return(
        <button
            className={styles.button}
            onClick={click}
            type={type}>
            {children}
        </button>
    )
}