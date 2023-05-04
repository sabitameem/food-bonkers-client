import React, { useEffect, useState } from "react";
import { Card} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { FcLike } from "react-icons/fc";


const ChefDetails = () => {
  const { id } = useParams();
  const [chef, setChef] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/chefData/${id}/chefData`)
      .then((res) => res.json())
      .then((data) => setChef(data))
      .then((error) => console.error(error));
  }, [id]);
  
  

  return (
    <div className="mb-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={chef.image_url} />
        <Card.Body>
          <Card.Title>{chef.name}</Card.Title>
          <Card.Text>{chef.description}</Card.Text>
          <p className="mb-0">Experience :{chef.years_of_experience} years </p>
          <p>Recipe Numbers :{chef.recipe_count}</p>
          
          <div className="d-flex gap-1">
            <p>Likes: {chef.likes}</p>
            <FcLike></FcLike>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ChefDetails;
