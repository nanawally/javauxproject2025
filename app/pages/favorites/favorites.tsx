import { FavoritedContent } from "~/components/Favorites/FavoritedContent";
import styles from "./favorites.module.css"
import { CustomFooter } from "~/components/UI/CustomFooter";

export function Favorites() {
  return (
    <>
      <main className={styles.favoriteTheme}>
        <div className="contentWrapper">
          <FavoritedContent />
        </div>
        <CustomFooter />
      </main>
    </>
  )
}