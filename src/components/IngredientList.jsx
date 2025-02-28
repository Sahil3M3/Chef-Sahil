import React from 'react'

const IngredientList = (props) => {
    const ingredients=props.ingredients;
  return (
    <>
    {ingredients.length >0 && <h1>Ingredients on hands</h1>}
    <ul className='ingredient-list'>
      {ingredients.map(c=><li key={c}>{c}</li>)}        
      </ul>   
  {  ingredients.length >3 &&    <div className='get-recipe-container'>
              <div >
                <h3>Ready for a recipe</h3>
                <p>Generate a recipe from your list of ingredient.</p>
              </div>
              <button onClick={props.showRecipe}>Get a recipe</button>
          </div>   } 
          </>
  )
}

export default IngredientList
