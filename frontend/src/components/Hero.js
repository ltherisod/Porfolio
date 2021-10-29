import NavBar from "./NavBar"
import { Link } from "react-router-dom"
const Hero = () => {
    return(
        <div className="heroContainer">
            <NavBar/>
            <div className="introHero">
            <div className="heroPhoto" style={{backgroundImage:'url("https://i.postimg.cc/cJLPRgCB/testprofilelau.png")'}}></div>
            <div className="dataHero">
                <span className="titleContainer">
                    Full-Stack Developer
                </span>
                <div className="heroText">
                <h2>Full-Stack MERN</h2>
                <h2>& Mobile App</h2>
                <p>¡Bienvenidos! Soy desarrolladora, vivo en Comodoro Rivadavia, Chubut y estoy en búsqueda de nuevos desafíos para convertirme en un excelente profesional. Espero que disfrutes mis trabajos! </p>
                </div>
                <Link  to='/contacto' onClick={() => window.scrollTo(0, 0)} className="contactSpan" >
                    <p className="contactHero">{"< Contactame! />"}</p>
                </Link> 
            </div>
            </div>
        </div>
    )
}

export default Hero