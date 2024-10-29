// ========= Imports ========= //
import styles from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card() {
  return (
    <div className={styles.outerContainer}>
        {/* Image Section */}
        <Link to="/" className={styles.imgContainer}>
            <img src="https://dodo.ac/np/images/7/7d/Arcade_Combat_Game_NH_Icon.png" alt="arcade game" className={styles.productImage}/>
        </Link>

    </div>
  )
}