import {NavLink} from "react-router-dom";
export const Header =()=>{
    return(
        <div className="main">
            <div className="container">
                <div className="heading">
                    <h1>WorldAtlas</h1>
                </div>
                <div className="list">
                    <ul className="unList">
                        <li><NavLink to="/">Home</NavLink> </li>
                        <li><NavLink to="about">About</NavLink></li>
                        <li><NavLink to="country">Country</NavLink></li>
                        <li><NavLink to="contact">Contact</NavLink></li>
                    </ul>     
                </div>
            </div>
        </div>
    )
}