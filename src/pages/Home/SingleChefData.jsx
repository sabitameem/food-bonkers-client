import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { FcLike } from "react-icons/fc";
import { Link } from 'react-router-dom';

const SingleChefData = ({singleChefData}) => {
    //console.log(singleChefData)
    const {id,image_url,likes,name,years_of_experience,recipe_count,ratings}=singleChefData;
    //console.log(id)
    // const [showRecipes, setShowRecipes] = useState(false);

    // const handleViewRecipes = () => {
    //   setShowRecipes(true);
    // };
    return (
        <div>
        <Col>
          <Card>
            <Card.Img style={{height :'180px'}} className='' variant="top" src={image_url} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <p>Experience :{years_of_experience} years </p>
              <p>Recipe Numbers : {recipe_count}</p>
              <p>
                <FcLike></FcLike> {likes}
              </p>
              <Link to={`/recipes/${id}`} className='btn btn-warning'>View Recipes</Link>
            </Card.Body>
          </Card>
        </Col>
      

            
        </div>
    );
};

export default SingleChefData;