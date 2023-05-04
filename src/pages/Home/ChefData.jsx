import React, { useEffect, useState } from "react";
import SingleChefData from "./SingleChefData";
import { Row } from "react-bootstrap";
//import LazyLoad from "react-lazy-load";

const ChefData = () => {
  const [chefData, setChefData] = useState([]);
  useEffect(() => {
    fetch("https://food-bonkers-server.vercel.app/chefData")
      .then((res) => res.json())
      .then((data) => setChefData(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="container">
      <h3 className="text-center text-warning mt-4 fs-2 fw-bold">
        Chef Collections
      </h3>
    
      <Row xs={1} md={3} className="g-4 ">
        {chefData.map((singleChefData) => (
          <SingleChefData
            key={singleChefData.id}
            singleChefData={singleChefData}
          ></SingleChefData>
        ))}
      </Row>
    </div>
  );
};

export default ChefData;
