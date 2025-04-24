import { FaArrowRightLong } from "react-icons/fa6";
import {NavLink} from "react-router-dom";
export const Countries=({country})=>{
    const{name,flags,id,common,capital,population,region}=country;
    return(
        <div className="hed">
            <li className="smp">
                <div className="poora">
                <div className="ded">
                <img src={flags.png} alt={flags.svg} />
                </div>
                <div className="likhna">
                <div className="led">
                    <h1 className="haye">{name.common.length > 10 ? name.common.slice(0,10) + "..." : name.common}</h1>
                </div>
                <div className="fed">
                    <p>Population: {population.toLocaleString()}</p>
                    <p>Region: {region}</p>
                    <p className="truncate">Capital:  {capital}</p>
                  <div className="butlo">
                  <NavLink to={`/country/${name.common}`}><button className="buto">Sea More <FaArrowRightLong  className="see"/></button></NavLink>
                  </div>
                </div>
                </div>
                </div>
            </li>
        </div>
    )
}