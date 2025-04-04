export const runtime = "edge";

import Link from "next/link";
import styles from "./page.module.css";

export default async function NumberPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    return (
        <div className={styles.container}>
            <div className={styles.page}>This page is /{slug}</div>
            <Link href={`/`} className={styles.link}>
                <p>Back page</p>
            </Link>
        </div>
    );
}
