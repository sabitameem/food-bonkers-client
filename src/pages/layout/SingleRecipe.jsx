import React from 'react';
import { Card } from 'react-bootstrap';import { FcLike } from 'react-icons/fc';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleRecipe = ({recipe}) => {
    const notify = () => toast("Added to favorite list!");

    //console.log(recipe)
    return (
        <Card className='mb-3'>
        <Card.Img style={{height:'250px'}} variant="top" src={recipe.image} />
        <Card.Body>
          <Card.Text className='fs-4 fw-bold'>
            {recipe.name}
          </Card.Text>
          <Card.Text>
           <span className='fs-6  fw-bold'>Ingredients :</span> {recipe.spices}
          </Card.Text>
          <Card.Text>
           <span className='fs-6 fw-bold'>Method :</span> {recipe.method}
          </Card.Text>
          <Card.Text>
           <span className='fs-6 fw-bold'>Rating :</span> {recipe.rating}
          </Card.Text>
          <div className="">
                Add to favorite
            <button className='ms-2' onClick={notify}><FcLike></FcLike></button>
            <ToastContainer />
            </div>
        </Card.Body>
      </Card>
    );
};

export default SingleRecipe;