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
            <h1>乱数を生成</h1>
            <button onClick={handleGenerateRandomNumber}>Generate</button>
            <p>{random}</p>
            <Link href={`/${random}`}>
                <p>move</p>
            </Link>
        </div>
    );
}
