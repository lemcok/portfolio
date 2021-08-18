import styles from '../../styles/Home.module.css';


export const CardItem = ({id, title, description, urlImage  }) => {
    return (
        <div className={ `${styles.card} ${styles.glass}`}>
            <img 
                src="/assets/imgs/task-app.png" 
                alt="" 
                className={styles.card_img}
            />
            <div className={styles.card_body}>
                <h2>{ title }</h2>
                <p>{ description }</p>
            </div>
        </div>
    )
}
