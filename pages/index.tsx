import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Space Age</title>
        <meta name="description" content="Generated by Next.js" />
        <link rel="icon" href="space.png" />
      </Head>
      <video autoPlay muted loop className={styles.video}>         
        <source src="/stars.mp4" type="video/mp4"/>       
      </video>
      <h1 className={styles.mainText}>Space Age</h1>
      <p className={styles.subText}>"In this single galaxy of ours there are eighty-seven thousand million suns." - Arthur C. Clarke</p>
    </div>
  )
}