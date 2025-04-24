import country from "../api/Country.json"
export const About=()=>{
    return(
       <div className="api_main">
        <div className="heading">
        <h2 className="top">
           The Top 20 Countries: 
        </h2>
        </div>
        <div className="api_cont">
            <ul className="lt">
        {
            Array.isArray(country.countries) && country.countries.map((curElem)=>{
                const {id,population,fact,country}=curElem;
                return(
                    <div key={id} className="api_home"> 
                        <h3 className="center">
                            {curElem.country}  
                        </h3>
                        <p>Population: <span> {curElem.population} M</span></p>
                        <p>Facts: {curElem.fact} </p>
                    </div>
                )

            })
        
        }
            </ul>
        </div>
       </div>
    )
}