import Head from 'next/head'
import { Header } from '../src/components/Header'
import { AboutMe } from '../src/components/AboutMe'
import styles from '../styles/Home.module.css'
import Experience from '../src/components/Experieance'
import Contact from '../src/components/Contact'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Meu lindo site</title>
      </Head>
      <Header/>
      <AboutMe/>
      <Experience/>
      <Contact/>
    </div>
  )
}
