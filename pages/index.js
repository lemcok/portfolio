import Head from 'next/head'
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
              <img src="/assets/imgs/avatar.jpg" alt="" className={ `${styles.img__avatar}` }/>
              <h2>Ricardo Flores</h2>
            </div>
            <ul className={styles.links}>
              <li className={styles.link}>
                <a href="https://twitter.com/Ricardo9Fm" target="_blank" rel="noopener noreferrer">
                  <img className={styles.redes} src="/assets/imgs/twitter.svg" alt=""/>
                  @Ricardo9Fm
                </a>
              </li>
              <li className={styles.link}><a href="https://github.com/lemcok" target="_blank" rel="noopener noreferrer"><img src="/assets/imgs/github.svg" alt=""/>lemcok</a></li>
              <li className={styles.link}><a href="https://www.linkedin.com/in/ricardo-flores-morales/" target="_blank" rel="noopener noreferrer"><img src="/assets/imgs/linkedin.svg" alt=""/>Linkedin</a></li>
              <li className={styles.link}><a href="" style={{'text-decoration': 'underline', 'color': 'blue'}}><img src="/assets/imgs/cv.svg" alt=""/>CV</a></li>
            </ul>
          </section>

          <section className={`${styles.glass} ${styles.container_cards}`}>
            <div className={ `${styles.card} ${styles.glass}`}>
              <img src="/assets/imgs/task-app.png" alt="" className={styles.card_img}/>
              <div className={styles.card_body}>
                <h2>Task-App</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className={ `${styles.card} ${styles.glass}`}>
              <img src="/assets/imgs/task-app.png" alt="" className={styles.card_img}/>
              <div className={styles.card_body}>
                <h2>Task-App</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </section>
      </main>

      <div className={styles.circle1}></div>
      <div className={styles.circle1}></div>
    </>
  )
}
