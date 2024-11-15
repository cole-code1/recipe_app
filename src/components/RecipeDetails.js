import React,{useState} from "react";
import EditRecipe from "./EditRecipe";

function RecipeDetails ({recipe, onClose, onDelete, setRecipes}){
    const [isEditing, setIsEditing] = useState(false);

    const handleUpdateRecipe = (updatedRecipe) => {
        setRecipes(prevRecipes =>
            prevRecipes.map(r => (r.id === updatedRecipe.id ? updatedRecipe : r))
        );
        setIsEditing(false); 
    };

    return(
        <div className="recipedetail">
            {isEditing ? (
                <EditRecipe recipe={recipe} onUpdateRecipe={handleUpdateRecipe} onClose={() => setIsEditing(false)} />
            ) : (
             <>
            {/* <img src={recipe.image}/> */}
            <h2>{recipe.recipeName}</h2>
            <p><strong>Prep Time:</strong> {recipe.prepTime}</p>
            <p><strong>Cook Time:</strong> {recipe.cookTime}</p>
            <h3>Ingredients:</h3>
            <ul>
                {recipe.ingredients.map((ingredient) => (
                    <li>{ingredient}</li>
                ))}
            </ul>
            <h3>Instructions:</h3>
            <ol>
                {recipe.instructions.map((Instruction) => (
                    <li>{Instruction}</li>
                ))}
            </ol>
            <button className="back-btn" onClick={onClose}>Back</button>
            <button className="Edit-btn" onClick={() => setIsEditing(true)}>Edit Recipe</button>
            <button className="Del-btn" onClick={() => onDelete(recipe.id)}>Delete Recipe</button>
             </>
            )}
         </div>
    )
}
export default RecipeDetails;