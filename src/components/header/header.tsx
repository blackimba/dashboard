import Link from "next/link";
import styles from './Header.module.css';

import { HeaderProps } from "../../interface";

const Header = ({ user, loading }: HeaderProps) => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.listContainer}>
                    <li className={styles.listItem}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href="/about">About</Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href="/advanced/api-profile">
                            API rendered profile (advanced)
                        </Link>
                    </li>
                    {!loading && (user ? (
                        <>
                            <li className={styles.listItem}>
                                <Link href="/profile">Client rendered profile</Link>
                            </li>
                            <li className={styles.listItem}>
                                <Link href="/advanced/ssr-profile">Server rendered profile (advanced)</Link>
                            </li>
                            <li className={styles.listItem}>
                                <Link href="/api/auth/logout">Logout</Link>
                            </li>
                        </>
                    ) : (
                        <li className={styles.listItem}>
                            <a href="/api/auth/login">Login</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header