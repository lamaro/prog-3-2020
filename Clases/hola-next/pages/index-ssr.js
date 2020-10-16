import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'

export default function Home({ data }) {

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <a href="/">Artists page!</a>
                </h1>

                <p className={styles.description}>
                    Conoce a los mejores
                </p>

                <div className={styles.grid}>
                    {data && data.map(({ _id, name, genre }) =>
                        <Link key={_id} href={`artists/${_id}`}>
                            <a className={styles.card}>
                                <h3>{name}</h3>
                                <p>{genre}</p>
                            </a>
                        </Link>
                    )}
                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
                </a>
            </footer>
        </div>
    )
}

export async function getServerSideProps() {
    try {
        const response = await axios.get('https://artists-api.vercel.app/artists');
        const { data } = response
        return { props: { data } }
    } catch (error) {
        console.error('este es mi error', error);
        return { props: {} }
    }
}