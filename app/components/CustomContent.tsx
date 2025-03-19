import { Link } from "react-router"
import styles from "./CustomContent.module.css"
import productImg from "app/pages/recipe/images/banansmoothie.jpg"

export function CustomContent() {
  return (
    <section className={styles.box}>
      <ul className={styles.list}>
        <li>
          <Link to="recipe">
            <img src="/pictures/strawberry-smoothie.jpg" alt="" className={styles.picture} />
            <p>Banansmoothie</p>
          </Link>
        </li>
        <li>
          <Link to="recipe">
            <img src="/pictures/banansmoothie.jpg" alt="" className={styles.picture} />
            <p>Banansmoothie</p>
          </Link>
        </li>
        <li>
          <Link to="">
            <img src={productImg} alt="" className={styles.picture} />
            <p>Banansmoothie</p>
          </Link>
        </li>
        <li>
          <Link to="">
            <img src={productImg} alt="" className={styles.picture} />
            <p>Banansmoothie</p>
          </Link>
        </li>
      </ul>
    </section>
  )
}