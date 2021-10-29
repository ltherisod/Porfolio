import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Technologies from '../components/Technologies'
import SomeProjects from '../components/SomeProjects'
const Home = () => {
    return (
        <div className="home">
        <Hero/>
        <div className="homeMain">
            <div className="cardsMain" >
                    <div className="card">
                        <div className="cardBody">
                            <div className="cardTitle">
                                <span>Diseño</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#66ff99" class="bi bi-brush-fill" viewBox="0 0 16 16">
                                    <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04z"/>
                                </svg>
                            </div>
                            <div className="cardText">
                                <p>Creatividad a la hora de realizar trabajos. Buscar comunicar una forma moderna y crear una muy buena experiencia de usuario</p>
                            </div>
                        </div>
                       
                    </div>
                    <div className="card">
                        <div className="cardTitle">
                            <span>Development</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#66ff99" class="bi bi-code-slash" viewBox="0 0 16 16">
                                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
                            </svg>
                        </div>
                        <div className="cardText">
                            <p>Desarrollo de aplicaciones web y móviles. Con una estética y funcionalidad original para sorprender al usuario.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardTitle">
                            <span>Estudio</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#66ff99" class="bi bi-lightning-fill" viewBox="0 0 16 16">
                                 <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z"/>
                            </svg>
                        </div>
                        <div className="cardText">
                            <p>Pasar por la experiencia de estar en un bootcamp de MindHub me brindó la habilidad de aprender rápido y ponerlo en práctica gracias a su metodología de "learning by doing".Continuamente busco nuevos conocimientos para crecer como profesional.</p>
                        </div>
                    </div>
             </div> 
            <div className="introductionMain">
                <div>
                    <p>Sobre mí</p>
                </div>
                <div>
                    <h3>Hola! Soy Laura Therisod</h3>
                </div>
                <div>
                    <h5>Desarrolladora Full-Stack MERN </h5>
                </div>
                <div>
                    <p>Egresada del bootcamp intensivo de más de 600hs en <span>MindHub</span>. Lo inicié sin conocimientos previos y en tres meses logré aprender muchisímo. Realicé varios trabajos completos, empecé solo con HTML y CSS hasta realizar una web app completa y su versión Mobile con su respectivo backend.
                    Soy  apasionada por el diseño, disfruto crear proyectos que impacten en lo visual como en lo funcional y continuamente busco sorprender al espectador.
                    Siempre estoy predispuesta a aprender nuevas formas de realizar mis tareas y disfruto mucho el trabajo en equipo. </p>
                </div>
            </div>
        </div>
            <Technologies/>
            <SomeProjects/>
        <Footer/>
        </div>
    )
}

export default Home