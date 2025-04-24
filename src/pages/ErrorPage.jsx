import { NavLink, useRouteError } from "react-router-dom"

export const ErrorPage=()=>{
    const error=useRouteError();
    return(
        <>
            <h1>{error && <p>{error.data}</p>}</h1>
            <NavLink to={"/"}> 
            <button>
                Go Home
            </button>
            </NavLink>
        </>
    )
}