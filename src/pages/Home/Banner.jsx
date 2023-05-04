import React from 'react';

const Banner = () => {
    return (
        <div className='d-flex justify-content-between'>
        <div className='ps-1'>
        <h2 className='pt-3 d-none  d-lg-block' style={{fontSize: "70px" , fontWeight:'bolder'}}>Discover your <br/><span className='text-warning'> Own</span> taste!!!</h2>
        <h2 className='pt-1 d-lg-none' style={{fontSize: "30px" , fontWeight: 'bold'}}>Discover your <br/><span className='text-warning'> Own</span> taste!!!</h2>

        <h2 className=' d-none  d-lg-block' style={{fontSize: '25px'}}>We try to show you all the variety of Japanese cuisine and its current trends.</h2>
        
        <h2 className=' d-lg-none' style={{fontSize: '10px'}}>We try to show you all the variety of Japanese cuisine and its current trends.</h2>

        </div>
        <img className='d-none w-50 d-lg-block' style={{height: '400px'}} src="https://i.ibb.co/16bDnJL/banner3.webp" alt="" />
        <img className='w-50 d-lg-none'style={{ height: '200px' }} src="https://i.ibb.co/16bDnJL/banner3.webp" alt="" />
        
    </div>
    );
};

export default Banner;