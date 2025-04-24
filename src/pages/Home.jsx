import { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import {NavLink} from "react-router-dom";
import { About } from "./About";
export const Home=()=>{
    const handleNextPage = () => {
        window.scrollTo({ top: 0, behavior: "smooth" }); 
      };
    return(
        <section className="hero">
        <div className="hero-cont">
            <div className="head">
                <h1>Explore the World One Country at a Time</h1>
                <p>"Embark on a journey across the globe with our world atlas website, where every map tells a story and every corner of the Earth comes to life. Discover continents, countries, and cultures through detailed maps, rich visuals, and insightful information. Whether you're a curious explorer, a student eager to learn, or a traveler planning your next adventure, our platform is your gateway to global understanding. Dive into the wonders of geography, uncover hidden gems, and connect with the world like never before. The Earth is vast, and every click brings you closer to its beauty and diversity."</p>
                <button onClick={handleNextPage} className="explore"><NavLink to="country" >Start Exploring <FaArrowRightLong className="but"/></NavLink></button>
            </div>
            <div className="hero-image">
                <img src="globe.png" alt="map-globe" />
            </div>
        </div>
        <About></About>
        </section>
       
    )
}