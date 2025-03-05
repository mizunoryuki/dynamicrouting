"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
    const [random, setRandom] = useState<number>();
    const handleGenerateRandomNumber = () => {
        const randomNumber = Math.random() * 100;
        const integer = Math.ceil(randomNumber);
        setRandom(integer);
    };

    useEffect(() => {
        handleGenerateRandomNumber();
    }, []);

    return (
        <div className={styles.page}>
            <h1>Generate random number</h1>
            <div className={styles.buttons}>
                <button
                    onClick={handleGenerateRandomNumber}
                    className={styles.border}
                >
                    Generate
                </button>
                <Link
                    href={`/${random}`}
                    className={`${styles.link} ${styles.border}`}
                >
                    <p>transition</p>
                </Link>
            </div>
            <p className={styles.number}>{random}</p>
        </div>
    );
}
