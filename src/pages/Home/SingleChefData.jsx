import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FcLike } from "react-icons/fc";

const SingleChefData = ({singleChefData}) => {
    console.log(singleChefData)
    const {id,image_url,likes,name,years_of_experience,recipe_count,ratings}=singleChefData;
    console.log(id)
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
              <button className='btn btn-warning'>View Recipe</button>
            </Card.Body>
          </Card>
        </Col>
      

            
        </div>
    );
};

export default SingleChefData;