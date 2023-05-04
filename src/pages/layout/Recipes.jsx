import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChefDetails from "./ChefDetails";
import { Spinner } from "react-bootstrap";
import SingleRecipe from "./SingleRecipe";

const Recipes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:5000/chefData/${id}/recipes`)
      .then((res) => res.json())
      .then((data) =>{
        setRecipes(data)
        setIsLoading(false);
      } )
      .catch((error) =>{
        console.log(error)
        setIsLoading(false);
      });
  }, [id]);

  return (
    <div className="container d-block justify-content-between gap-5 d-lg-flex mt-3">
      {isLoading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      <ChefDetails></ChefDetails>
      <div className="">
        {recipes?.map((recipe) => (
          <SingleRecipe
          key={recipe.recipe_id}
          recipe={recipe}
          ></SingleRecipe>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
