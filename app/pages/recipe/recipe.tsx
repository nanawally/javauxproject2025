import { Link } from "react-router";
import styles from "./recipe.module.css";
import productImg from "./images/banansmoothie.jpg"

export function Recipe() {
  return (
    <main className={styles.recipeTheme}>
      <h1>Banansmoothie</h1>
      <div className={styles.center}>
        <section>
          <div className={styles.posts}>
            <article className={styles.individualpost}>
              <img src={productImg} alt="bananaSmoothie" />
              <h3>Ingredienser</h3>
              <p>
                <ul>
                  <li>1 banan</li>
                  <li>3 dl havrebaserad dryck</li>
                  <li>2 tsk brun farin</li>
                  <li>1 krm mald kanel (kan uteslutas)</li>
                </ul>
              </p>
            </article>
            <article className={styles.individualpost}>
              <h3>Gör så här</h3>
              <p>
                Blanda alla ingredienser i en blender, matberedare eller mixa
                med en mixerstav.
              </p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
