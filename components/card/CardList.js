import styles from '../../styles/Home.module.css';
import projects from '../../projects.json';
import { CardItem } from './CardItem';

export const CardList = () => {
    return (
        <div className={styles.container__cards}>
            {
                projects.map( pro => (
                    <CardItem key={ pro.id } {...pro } />
                ) )
            }
        </div>
    )
}
