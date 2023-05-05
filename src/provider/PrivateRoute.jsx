// import React, { useContext } from 'react';
// import { AuthContext } from './AuthProvider';
// import { Navigate, useLocation } from 'react-router-dom';

// const PrivateRoute = ({children}) => {
//     const {user}= useContext(AuthContext)
     // const location =useLocation()
     // console.log(location)
//     const location =useLocation()
//     console.log(location)
//     if(user){
//         return children
//     }
//     return <Navigate state={{from : location}} to='/login' replace></Navigate>
// };

// export default PrivateRoute;

import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location =useLocation()
    if(loading) return <div>loading</div>
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;