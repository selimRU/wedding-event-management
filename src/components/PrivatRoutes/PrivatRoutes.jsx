import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivatRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)


    if (loading)
        <div>
            <span className="loading loading-spinner text-primary"></span>
            <span className="loading loading-spinner text-secondary"></span>
            <span className="loading loading-spinner text-accent"></span>
            <span className="loading loading-spinner text-neutral"></span>
            <span className="loading loading-spinner text-info"></span>
            <span className="loading loading-spinner text-success"></span>
            <span className="loading loading-spinner text-warning"></span>
        </div>

    if (user) {
        return children;
    }
    return <Navigate to='/login'></Navigate>


};

export default PrivatRoutes;