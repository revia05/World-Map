import { useEffect, useState, useTransition } from "react"
import { getCounties } from "../api/postApi";
import { Loader } from "./Loader";
import { Countries } from "../layout/Countries";
import { SearchFilter } from "./SearchFilter";

export const Country=()=>{
    const[isPending,startTransition]=useTransition();
    const[data,setData]=useState();
    const[search,setSearch]=useState();
    const[filter,setFilter]=useState("all");
    useEffect(()=>{
       startTransition(async()=>{
        const res=await getCounties();
        console.log(res);
        setData(res.data);
       })
    },[])
    if(isPending) {
        return(
            <Loader></Loader>
        )
    }
    const searchCountry=(country)=>{
        if(search){
            return country.name.common.toLowerCase().includes(search.toLowerCase());
        }return country;
    }
    const filterRegion=(country)=>{
        if(filter==="all") return country;
        return country.region === filter;
    }
    const filterCountries=data ? data.filter((country)=>searchCountry(country) && filterRegion(country)):[];
    return(
        <section className="aao">
            <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} data={data} setData={setData} />
            <div className="kya">
                <ul className="bolo">
                    {
                        Array.isArray(filterCountries) && filterCountries.map((curElem,index)=>{
                            return(
                                <Countries country={curElem} key={index}/>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}