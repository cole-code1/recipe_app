import React from "react";

function RecipeCard ({recipe,onViewDetails}){
    return(
        <div className="card" >
            <img className="card-img-top" src={recipe.image} alt={recipe.recipeName} />
            <div className="card-body">
            <h4 className="card-title">{recipe.recipeName}</h4>
            <button className="View Details" onClick={() => onViewDetails(recipe)}>View Details</button>
            </div>
        
        </div>
        
    );
  }
  export default RecipeCard;


