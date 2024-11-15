import React, { useState } from "react";

const EditRecipe = ({ recipe, onUpdateRecipe, onClose }) => {
    const [recipeName, setRecipeName] = useState(recipe.recipeName);
    const [image, setImage] = useState(recipe.image);
    const [prepTime, setPrepTime] = useState(recipe.prepTime.replace(" minutes", "")); 
    const [cookTime, setCookTime] = useState(recipe.cookTime.replace(" minutes", "")); 
    const [ingredients, setIngredients] = useState(recipe.ingredients.join(", "));
    const [instructions, setInstructions] = useState(recipe.instructions.join(". "));

    const handleSubmit = (event) => {
        event.preventDefault();

        const updatedRecipe = {
            ...recipe,
            recipeName,
            image,
            prepTime: `${prepTime} minutes`, 
            cookTime: `${cookTime} minutes`,
            ingredients: ingredients.split(",").map(ingredient => ingredient.trim()),
            instructions: instructions.split(".").map(instruction => instruction.trim()),
        };

        fetch(`http://localhost:3000/recipes/${recipe.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedRecipe),
        })
        .then(response => response.json())
        .then(updated => {
            onUpdateRecipe(updated);alert('Recipe updated successfully!');
            onClose(); 
        })
        .catch(error => console.error('Error updating recipe:', error));
    };

    return (
        <div className="edit-recipe">
            <h2>Edit Recipe</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={recipeName} onChange={(e) => setRecipeName(e.target.value)} placeholder="Recipe Name" />
                <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" />
                <input type="number" value={prepTime} onChange={(e) => setPrepTime(e.target.value)} placeholder="Prep Time (in minutes)" />
                <input type="number" value={cookTime} onChange={(e) => setCookTime(e.target.value)} placeholder="Cook Time (in minutes)" />
                <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} placeholder="Ingredients (comma separated)" />
                <input type="text" value={instructions} onChange={(e) => setInstructions(e.target.value)} placeholder="Instructions (separate with periods)" />
                <button type="submit">Update Recipe</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
};

export default EditRecipe;