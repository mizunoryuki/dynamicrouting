import Link from "next/link";
import styles from "./page.module.css";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const number = await params;

    return (
        <div className={styles.container}>
            <div className={styles.page}>This page is /{number.slug}</div>
            <Link href={`/`} className={styles.link}>
                <p>Back page</p>
            </Link>
        </div>
    );
}

export const runtime = "edge";
