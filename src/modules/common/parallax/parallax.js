import PistaTrekImg from '../../../assets/parallax/images/pista-trek.jpg'
import styles from './styles.module.scss'

const Parallax = () => {

    return (
        <div className={styles.container}>
            <img src={PistaTrekImg}/>
            <div className={styles.content}>
                <p> Descubri el viento...</p>
            </div>
        </div>)
}

export default Parallax