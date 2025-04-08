import styles from "./Label.module.css"

interface LabelProps {
    profiles: string[];
    allergens: string[];
}

const allergenImages: Record<string, string> = {
    Laktos: "/assets/Laktos.jpg",
    laktos: "/assets/Laktos.jpg",

    Nötter: "/assets/Nut-allergy.jpg",
    nötter: "/assets/Nut-allergy.jpg",

    Gluten: "/assets/Gluten.jpg",
    gluten: "/assets/Gluten.jpg"
};

export function Label({ profiles, allergens }: LabelProps) {
    return (
        <section className={styles.labelContainer}>
            {profiles.map((profile, index) => (
                <span key={index} className={styles.profileLabel}>
                    {profile}
                </span>
            ))}

            {allergens.length > 0 &&
                allergens.map((allergen, index) => {
                    const imgSrc = allergenImages[allergen];
                    return (
                        <span key={`allergen-${index}`} className={styles.allergenLabel}>
                            {imgSrc ? (
                                <img src={imgSrc} alt={allergen} />
                            ) : (
                                <span>{allergen}</span> // fallback if image not found
                            )}
                        </span>
                    );
                })}
        </section>
    )
};