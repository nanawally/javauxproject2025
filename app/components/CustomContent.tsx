import styles from "./CustomContent.module.css"

export function CustomContent() {
  return (
    <section className={styles.box}>
      <ul className={styles.list}>
        <li>
          <img src="app/pictures/strawberry-smoothie.jpg" alt="" className={styles.picture} />
          <p>Template</p>
        </li>
        <li>
          <img src="app/pictures/strawberry-smoothie.jpg" alt="" className={styles.picture} />
          <p>Template</p>
        </li>
        <li>
          <img src="app/pictures/strawberry-smoothie.jpg" alt="" className={styles.picture} />
          <p>Template</p>
        </li>
        <li>
          <img src="app/pictures/strawberry-smoothie.jpg" alt="" className={styles.picture} />
          <p>Template</p>
        </li>
      </ul>
    </section>
  )
}