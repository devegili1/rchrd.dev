import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>richard devegili / wip</title>
                <meta name="description" content="wip"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    richard devegili / work in progress
                </h1>
            </main>
        </div>
    )
}

export default Home
