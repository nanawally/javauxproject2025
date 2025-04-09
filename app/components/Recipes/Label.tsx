import styles from "./Label.module.css"

interface LabelProps {
    profiles: string[];
    allergens: string[];
}

const allergenImages: Record<string, string> = {
    Laktos: "/assets/Laktos-b.jpg",
    laktos: "/assets/Laktos-b.jpg",

    Nötter: "/assets/Nut-allergy-b.jpg",
    nötter: "/assets/Nut-allergy-b.jpg",

    Gluten: "/assets/Gluten-b.jpg",
    gluten: "/assets/Gluten-b.jpg"
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