import React, {  useState } from 'react'
import Recipe from './Recipe';
import IngredientList from './IngredientList';
import {getRecipeFromMistral} from "../ai"

const Main = () => {
const [ingredients,setIngredients]=useState([])
const [recipeShown,setRecipeShown]=useState(false);

const submitHandler=(e)=>{
  const newIngredient =e.get("ingredients");
setIngredients(ps=>[...ps,newIngredient])
}

const showRecipe=async()=>{
 const recipeMarkdown=await getRecipeFromMistral(ingredients);
setRecipeShown(recipeMarkdown)
 
}

  return (
    <main>
    <form action={submitHandler} className='my-form'>

        <input type='text' name="ingredients" id="ingredients" placeholder='e.g Orange' className='input-field'/>
        <button > Add ingredient</button>    
    </form>
 <IngredientList  ingredients={ingredients}  showRecipe={showRecipe}/>

{ recipeShown  && <Recipe recipe={recipeShown}/> }

    </main>
  )
}

export default Main
