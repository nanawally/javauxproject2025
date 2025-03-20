import { Link } from "react-router";
import styles from "./recipe.module.css";
import { CustomHeader } from "~/components/CustomHeader";
import { CustomFooter } from "~/components/CustomFooter";

export function Recipe() {
  return (
    <>
      <div className={styles.pageWrapper}>
        <CustomHeader />
        <main className={styles.recipeTheme}>
          <div className={styles.center}>
            <h2 className={styles.title}>Banansmoothie</h2>
          </div>
          <div className={styles.center}>
            <section>
              <div className={styles.posts}>
                <article className={styles.individualpost}>
                  <img src="/assets/smoothies/Banansmoothie.jpg" alt="bananaSmoothie" />
                  <h3>Ingredienser</h3>

                  <ul>
                    <li>1 banan</li>
                    <li>3 dl havrebaserad dryck</li>
                    <li>2 tsk brun farin</li>
                    <li>1 krm mald kanel (kan uteslutas)</li>
                  </ul>

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
        <CustomFooter />
      </div>
    </>
  );
}
