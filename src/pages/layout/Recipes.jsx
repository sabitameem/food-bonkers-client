import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Recipes = () => {
    
    const {id}= useParams();
    const [recipes,setRecipes]= useState([])
   
    useEffect(()=>{
        fetch(`http://localhost:5000/chefData/${id}/recipes`)
        .then(res=> res.json())
        .then(data =>setRecipes(data))
        .catch(error=>console.log(error))
    },[id])

    return (
        <div>
            {
                recipes?.map(recipe=>(
                    <div
                    key={recipe.recipe_id}
                    >
                        <p>{recipe.name}</p>
                    </div>
                ))
            }
       
        </div>
    );
};

export default Recipes;