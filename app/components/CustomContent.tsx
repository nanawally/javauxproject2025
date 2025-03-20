import { Link } from "react-router"
import styles from "./CustomContent.module.css"

export function CustomContent() {
  return (
    <section className={styles.box}>
      <ul className={styles.list}>
        <li>
          <Link to="recipe">
            <img src="/assets/smoothies/Banansmoothie.jpg" alt="" className={styles.picture} />
            <p>Banansmoothie</p>
          </Link>
        </li>
        <li>
          <Link to="recipe">
            <img src="/assets/smoothies/Blåbärsmoothie.jpg" alt="" className={styles.picture} />
            <p>Blåbärsmoothie</p>
          </Link>
        </li>
        <li>
          <Link to="recipe">
            <img src="/assets/smoothies/Jordgubbsmoothie.jpg" alt="" className={styles.picture} />
            <p>Jordgubbsmoothie</p>
          </Link>
        </li>
        <li>
          <Link to="recipe">
            <img src="/assets/smoothies/Hallon-blåbärsmoothie.jpg" alt="" className={styles.picture} />
            <p>Hallon- och Blåbärsmoothie</p>
          </Link>
        </li>
      </ul>
    </section>
  )
}