import Head from 'next/head'
import { Header } from '../src/components/Header'
import { AboutMe } from '../src/components/AboutMe'
import styles from '../styles/Home.module.css'
import Experience from '../src/components/Experieance'
import Contact from '../src/components/Contact'
import { Portfolio } from '../src/components/Portifolio'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Érico Bandeira</title>
      </Head>
      <Header/>
      <AboutMe/>
      <Experience/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}
