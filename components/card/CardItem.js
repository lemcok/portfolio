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
                <div>
                    <h2>{ title }</h2>
                    <p>{ description }</p>
                </div>
                <div>
                    <i className='bx bxl-react'></i>
                    <i class='bx bxl-angular' ></i>
                    <i class='bx bxl-docker'></i>
                    <i class='bx bxl-nodejs'></i>
                    <i class='bx bxl-aws' ></i>
                    <i class='bx bxl-git' ></i>
                    <i class='bx bxl-javascript'></i>
                    <i class='bx bxl-django' ></i>
                    <i class='bx bxl-python' ></i>
                    <i class='bx bxl-visual-studio'></i>
                    <i class='bx bxl-github'></i>
                </div>
            </div>
        </div>
    )
}
