import { useEffect, useState, useTransition } from "react";
import { Loader } from "../pages/Loader";
import { getCountiesInd } from "../api/postApi";
import { NavLink, useParams } from "react-router-dom";

export const CountryDetails=()=>{
   const params= useParams();
    const[isPending,startTransition]=useTransition();
    const[data,setData]=useState();
    useEffect(()=>{
       startTransition(async()=>{
        const res=await getCountiesInd(params.id);
        console.log(res);
        if(res.status === 200){
            setData(res.data[0]);
        }
       })
    },[])
    if(isPending) {
        return(
            <Loader></Loader>
        )
    }
    return(
        <div className="imp">
            {data && (
                <div className="min-imp">
                    <div className="jhanda">
                    <img src={data.flags.png} alt={data.flags.svg} />
                    </div>
                    <div className="patti">
                    <h1>{data.name.official}</h1>
                        <ul>
                        <li className="moom">
                        <p>Native Names: {
                            Object.keys(data.name.nativeName).map((curElem)=>
                                data.name.nativeName[curElem].common
                            ).join(", ")
                        }</p>
                        <p>Population: {data.population.toLocaleString()}</p>
                        <p>Region: {data.region}</p>
                        <p>Sub Region: {data.subregion}</p>
                        <p>Capital: {data.capital[0]}</p>
                        <p>Top Level Domain: {data.tld}</p>
                        <p>Currencies: {Object.keys(data.currencies).map((curElem)=>data.currencies[curElem].name).join(", ") }</p>
                        <p>Languages: {Object.keys(data.languages).map((curElem)=>data.languages[curElem]).join(", ")}</p>
                        </li>
                        </ul>
                    </div>
                    <div className="dabao">
                        <NavLink to={"/country"}>
                            <button className="dabana">Go Back</button>
                        </NavLink>
                    </div>
                </div>
            )}
        </div>
    )
}