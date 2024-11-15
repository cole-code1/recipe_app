import React, { useState } from "react";

function AddRecipe() {
    const [recipeName, setRecipeName] = useState("");
    const [image, setImage] = useState("");
    const [prepTime, setPreptime] = useState("");
    const [cookTime, setCooktime] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const [servings, setServings] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const newRecipe = {
            recipeName,
            image,
            prepTime: `${prepTime} minutes`,
            cookTime: `${cookTime} minutes`,
            ingredients: ingredients.split(",").map(ingredient => ingredient.trim()),
            instructions: instructions.split(".").map(instruction => instruction.trim()),
            servings
        };

        fetch("http://localhost:3000/recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newRecipe),
        })
        .then(response => response.json())
        .then(() => {
            alert("Recipe added successfully!");
            setRecipeName("");
            setImage("");
            setPreptime("");
            setCooktime("");
            setIngredients("");
            setInstructions("");
            setServings("");
        });
    };

    return (
        <div className="new-recipe">
            <h2>Fill in the form to add a Recipe</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="recipeName" placeholder="Recipe Name" value={recipeName} onChange={(e) => setRecipeName(e.target.value)} />
                <input type="text" name="image" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
                <input type="number" name="prepTime" placeholder="Prep Time" value={prepTime} onChange={(e) => setPreptime(e.target.value)} />
                <input type="number" name="cookTime" placeholder="Cook Time" value={cookTime} onChange={(e) => setCooktime(e.target.value)} />
                <input type="text" name="ingredients" placeholder="Ingredients (comma separated)" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
                <input type="text" name="instructions" placeholder="Instructions (separate with periods)" value={instructions} onChange={(e) => setInstructions(e.target.value)} />
                <input type="number" name="servings" placeholder="Servings" value={servings} onChange={(e) => setServings(e.target.value)} />
                <button type="submit">Add Recipe</button>
            </form>
        </div>
    );
}

export default AddRecipe;