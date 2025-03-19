import { Link } from "react-router"
import styles from "./CustomContent.module.css"

export function CustomContent() {
  return (
    <section className={styles.box}>
      <ul className={styles.list}>
        <li>
          <Link to="recipe">
            <img src="app/pictures/strawberry-smoothie.jpg" alt="" className={styles.picture} />
            <p>Template</p>
          </Link>
        </li>
        <li>
          <Link to="recipe">
            <img src="app/pictures/strawberry-smoothie.jpg" alt="" className={styles.picture} />
            <p>Template</p>
          </Link>
        </li>
        <li>
          <Link to="">
            <img src="app/pictures/strawberry-smoothie.jpg" alt="" className={styles.picture} />
            <p>Template</p>
          </Link>
        </li>
        <li>
          <Link to="">
            <img src="app/pictures/strawberry-smoothie.jpg" alt="" className={styles.picture} />
            <p>Template</p>
          </Link>
        </li>
      </ul>
    </section>
  )
}