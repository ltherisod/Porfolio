import { Link } from "react-router-dom"
const SomeProjects = () => {
    return (
        <div className="someProjectsContainer">
            <div className="videoSection">
                <h4>Algunos Proyectos</h4>
                <p>Para ver más de mis trabajos <Link className="viewMore" to='/proyectos' onClick={() => window.scrollTo(0, 0)}>haz click aquí</Link> </p>
            </div>
            <div className="videoDescrip">
                <video className="proyectVideo" src='/assets/LOH2.mp4' autoPlay loop muted/>
                <div className="cardVideo">
                    <div className="cardbody">
                        <div className="videoTitle">
                            <span>LOH</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#66ff99" className="bi bi-controller" viewBox="0 0 16 16">
                                <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z"/>
                                <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z"/>
                            </svg>
                        </div>
                        <div className="videoText">
                            <p>Web app estilo Red social gamer, conectada directamente con League of Legends. Los usuarios al informar su nombre de usuario del juego, automaticamente se crea su perfil con su información de jugador. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="videoDescrip">
                <div className="cardVideo">
                    <div className="cardBody">
                        <div className="videoTitle">
                            <span>Ludotech</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#66ff99" className="bi bi-dice-6-fill" viewBox="0 0 16 16">
                                <path d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm1 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm8 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm1.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM12 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM4 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                            </svg>
                        </div>
                        <div className="videoText">
                            <p>Mobile app. Ecommerce de juegos de mesa. La estética que se eligió fue divertida y colorida en relación a la temática como al logo estilo cubo rubik. </p>
                        </div>
                    </div>
                </div>
                <video className="proyectVideo" src='/assets/ludotech.mp4' autoPlay loop muted/>
            </div>
            <div className="videoDescrip">
                <video className="proyectVideo" src='/assets/yummy.mp4' autoPlay loop muted/>
                <div className="cardVideo">
                    <div className="cardBody">
                        <div className="videoTitle">
                            <span>Yummy!</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#66ff99" className="bi bi-egg-fried" viewBox="0 0 16 16">
                                <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                <path d="M13.997 5.17a5 5 0 0 0-8.101-4.09A5 5 0 0 0 1.28 9.342a5 5 0 0 0 8.336 5.109 3.5 3.5 0 0 0 5.201-4.065 3.001 3.001 0 0 0-.822-5.216zm-1-.034a1 1 0 0 0 .668.977 2.001 2.001 0 0 1 .547 3.478 1 1 0 0 0-.341 1.113 2.5 2.5 0 0 1-3.715 2.905 1 1 0 0 0-1.262.152 4 4 0 0 1-6.67-4.087 1 1 0 0 0-.2-1 4 4 0 0 1 3.693-6.61 1 1 0 0 0 .8-.2 4 4 0 0 1 6.48 3.273z"/>
                            </svg>
                        </div>
                        <div className="videoText">
                            <p>Recetario virtual, en donde los usuarios pueden crearse una cuenta y subir sus recetas en su perfil. Cada usuario es capaz de editar y borrar dicho posteo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SomeProjects