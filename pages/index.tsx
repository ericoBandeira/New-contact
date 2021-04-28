import Head from 'next/head'
import { Header } from '../src/components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Meu lindo site</title>
      </Head>

      <Header/>
    </div>
  )
}
