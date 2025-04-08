import { Link } from "react-router";
import { Favorite } from "../Favorite";
import "./style.css";
import { useRecipeContext } from "../../components/Recipes/RecipeContext";

type Props = {
    id: number;
    image: string;
    title: string;
    description: string;
}



export const RecipeCard = ({image, title, description, id}: Props) => {
    const { setRecipeIndex } = useRecipeContext();
    function handleRecipeClick(id: number) {
        setRecipeIndex(id);
    }
    

    return (
        <Link to="../recipe" onClick={() => handleRecipeClick(id)}> 
        <div className="receptkort-desktop">
            <img className="image" alt="Image" src={image} />

            <div className="text-wrapper-2">{title}</div>

            <p className="p">
                {description}
            </p>

            <Favorite className="property-1-default" />
        </div>
        </Link>
    );
};
