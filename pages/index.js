import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Perfect Scrub for your offices." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/perfect_logo.jpg"
            alt="Perfect Scrub Logo"
            width={180}
            height={180}
            priority
          />
          
        </div>

      </main>
    </>
  )
}
