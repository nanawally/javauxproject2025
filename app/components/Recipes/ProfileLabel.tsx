import styles from "./ProfileLabel.module.css"

interface ProfileLabelProps {
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

export function ProfileLabel({ profiles, allergens }: ProfileLabelProps) {
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
                        <span key={`allergen-${index}`} className={styles.allergenIcon}>
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