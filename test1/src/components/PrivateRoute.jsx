import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PrivateRoute(){
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token){
            setIsAuthenticated(true);
        }
        else{
            setIsAuthenticated(false);
            navigate("/login");
        }
    }, []);

    return(
        <>
            {
                isAuthenticated && <Outlet/> 
            }
        </>
    )


}