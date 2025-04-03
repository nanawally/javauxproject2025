import styles from "./AboutPage.module.css";

export function AboutPage() {
  return (
    <>
      <main className={styles.aboutTheme}>
        <div className={styles.bigTextContainer}>
          <h1 className={styles.textContainers}>Hej smoothieälskare!</h1>
          <p className={styles.textContainers}>
            Vi älskar smoothies! Men vi vet hur det är - lätt att fastna i samma
            gamla recept eller tro att det krävs mer tid och ingredienser än det
            faktiskt gör.
          </p>
          <p className={styles.textContainers}>
            Därför har vi samlat de bästa och smidigaste recepten - för att göra
            det enklare och roligare att mixa sig fram till nya favoriter!
          </p>
          <p className={styles.textContainers}>
            Här hittar du snabba, goda och inspirerande recept. Oavsett om du
            vill ha en hälsoboost, något barnvänligt eller en smoothie som
            smakar dessert (ja, tack!). Så fram med mixern och låt oss göra
            världen lite godare, en slurk i taget!
          </p>
          <h3 className={styles.textContainers}>-Smoothify Teamet</h3>
        </div>
      </main>
    </>
  );
}
