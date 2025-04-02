import styles from "./AboutPage.module.css"

export function AboutPage() {
  return (
    <>
      <main className={styles.aboutTheme}>
        <section className={styles.placeholderWrapper}>
          <h3 className={styles.placeholderText}>
            Vi älskar smoothies! Men vi vet hur det är - lätt att fastna i samma gamla recept eller tro att det krävs mer tid och ingredienser än det faktiskt gör. <br /><br />
            Därför har vi samlat de bästa och smidigaste recepten - för att göra det enklare och roligare att mixa sig fram till nya favoriter! <br /><br />
            Här hittar du snabba, goda och inspirerande recept. Oavsett om du vill ha en hälsoboost, något barnvänligt eller en smoothie som smakar dessert (ja, tack!) Så fram med mixern och låt oss göra världen lite godare, en slurk i taget! <br /><br />
            - Smoothify Teamet
          </h3>
        </section>
        
      </main>

    </>
  );
}