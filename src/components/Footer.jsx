import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import footers from "../api/Footer.json"
export const Footer=()=>{
    const footerIcon ={
        FaFacebookF: <FaFacebookF />,
        FaXTwitter:<FaXTwitter />,
        FaLinkedin:<FaLinkedin />,
        FaInstagram:<FaInstagram />
    };
    return(
        <div className="main-footer">
            <div className="mid-footer">
                <ul className="ft">
                    <li>
                    {
                        Array.isArray(footers.company) && footers.company.map((curElem)=>{
                            const {id,name,copyright}=curElem;
                            return(
                                <div key={id} className="harer1" >
                                    <h1>{curElem.name}</h1>
                                    <p>{curElem.copyright}</p>
                                </div>
                            )
                        })
                    }
                    </li>
                    <li>
                    {
                        Array.isArray(footers.contact) && footers.contact.map((curElem)=>{
                            const {id,email,phone,icons}=curElem;
                            return(
                                <div key={id} className="harer2" >
                                    <p>{curElem.email}</p>
                                    <p>{curElem.phone}</p>
                                </div>
                            )
                        })
                    }
                    </li>
                    <li>
                    {
                        Array.isArray(footers.social_media) && footers.social_media.map((curElem)=>{
                            const {id,name}=curElem;
                            return(
                                <div key={id} className="harer3" >
                                    <a href={curElem.url}>{footerIcon[name]}</a>
                                </div>
                            )
                        })
                    }
                    </li>
                    <li>
                    {
                        Array.isArray(footers.quick_links) && footers.quick_links.map((curElem)=>{
                            const {id,name}=curElem;
                            return(
                                <div key={id} className="harer4" >
                                    <a href={curElem.url}>{curElem.name}</a>
                                </div>
                            )
                        })
                    }
                    </li>
                   
                </ul>
            </div>
        </div>
    )
}