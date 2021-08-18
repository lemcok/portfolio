import Head from 'next/head'
import { CardList } from '../components/card/CardList'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ricardo Flores - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <section className={`${styles.container_profile} ${styles.glass} ${styles.mb_5}`}>
            <div className={styles.photo}>
              <img src="/assets/imgs/photo.png" alt="" className={ `${styles.img__avatar}` }/>
              <h2>Ricardo Flores</h2>
              <p>Frontend Developer</p>
            </div>
            <ul className={styles.links}>
              <li className={styles.link}>
                <a href="https://twitter.com/Ricardo9Fm" target="_blank" rel="noopener noreferrer">
                  <img className={styles.redes} src="/assets/imgs/twitter.svg" alt=""/>
                  Ricardo9fm
                </a>
              </li>
              <li className={styles.link}><a href="https://github.com/lemcok" target="_blank" rel="noopener noreferrer"><img src="/assets/imgs/github.svg" alt=""/>lemcok</a></li>
              <li className={styles.link}><a href="https://www.linkedin.com/in/ricardo-flores-morales/" target="_blank" rel="noopener noreferrer"><img src="/assets/imgs/linkedin.svg" alt=""/>Linkedin</a></li>
              <li className={styles.link}><a href="" style={{'textDecoration': 'underline', 'color': 'blue'}}><img src="/assets/imgs/cv.svg" alt=""/>CV</a></li>
            </ul>
          </section>

          <section className={`${styles.glass} ${styles.container_articles}`}>

            <div className={styles.categories}>
              <button className={ `${styles.glass} ${styles.btn}` }>
                projects
              </button>
              <button className={ `${styles.glass} ${styles.btn}` }>
                projects
              </button>
              <button className={ `${styles.glass} ${styles.btn}` }>
                projects
              </button>
            </div>

            <CardList />
            
          </section>
      </main>

      <div className={styles.circle1}></div>
      <div className={styles.circle1}></div>
    </>
  )
}
