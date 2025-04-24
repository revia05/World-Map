export const SearchFilter=({search,setSearch,filter,setFilter,data,setData})=>{
    const handleInputButton=(e)=>{
        e.preventDefault();
        setSearch(e.target.value);
    }
    const handleSelectChange=(e)=>{
        e.preventDefault();
        setFilter(e.target.value);
    }
    const sortBut=(value)=>{
        const sortCount=[...data].sort((a,b)=>{
            return value === "asc" ? a.name.common.localeCompare(b.name.common) : b.name.common.localeCompare(a.name.common);
        })
        setData(sortCount);
    }
    return(
        <div className="fields">
            <div className="searchvrom">
                <input type="text" placeholder="Search" value={search} onChange={handleInputButton}/>
            </div>
            <div className="asc">
                <button onClick={()=>sortBut("asc")}>Asc</button>
            </div>
            <div className="desc">
                <button onClick={()=>sortBut("desc")}>Desc</button>
            </div>
            <div className="optvrom">
                <select value={filter} onChange={handleSelectChange}>
                    <option value="all">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
           
        </div>
    )
}