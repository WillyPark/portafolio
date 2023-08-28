import { useState } from "react";

export const NavMenu = () => {
    const [mostrar, setMostrar] = useState( false );

    const menuResponsive = () => {
        setMostrar( !mostrar )
    }

    const quitarMenu = () => {
        setMostrar( false )
    }

    return (
        <nav className="navMenu">
            <div className="contenedor">
                <div className="responsive-menu" onClick={ menuResponsive }>
                    <i className="fas fa-bars"></i>
                </div>

                <ul className={`ulNavMenu ${ mostrar ? "mostrar" : "" }`}>
                    <li onClick={ quitarMenu }><a href="#inicio" className="liNavMenu">Inicio</a></li>
                    <li onClick={ quitarMenu }><a href="#about" className="liNavMenu">Sobre Mi</a></li>
                    <li onClick={ quitarMenu }><a href="#proyectos" className="liNavMenu">Proyectos</a></li>
                    <li onClick={ quitarMenu }><a href="#tecnologias" className="liNavMenu">Tecnologías</a></li>
                    <li onClick={ quitarMenu }><a href="#contacto" className="liNavMenu">Contacto</a></li>
                </ul>
            </div>
        </nav>
    )
}
