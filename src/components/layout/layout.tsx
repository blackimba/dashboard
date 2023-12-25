import Head from "next/head";
import Header from '../header/header';
import styles from './Layout.module.css';

import { LayoutProps } from "../../interface";

const Layout = ({ user, loading = false, children }: LayoutProps) => {
    return (
        <>
            <Head>
                <title>Next.js with Auth0</title>
            </Head>
            <Header user={user} loading={loading}/>
            <main>
                <div className={styles.container}>{children}</div>
            </main>
        </>
    )
}

export default Layout