import styles from "./AboutPage.module.css";

export function AboutPage() {
  return (
    <>
      <main className={styles.aboutTheme}>
        <div className={styles.textContainer}>
          <h1>Hej smoothieälskare!</h1>
          <p>
            Vi älskar smoothies! Men vi vet hur det är - lätt att fastna i samma
            gamla recept eller tro att det krävs mer tid och ingredienser än det faktiskt gör.
          </p>
          <p>Därför har vi samlat</p>
        </div>
      </main>
    </>
  );
}
