import { useState  } from "react";

export const NavMenu = () => {
    const [mostrar, setMostrar] = useState( false );
    // const [active, setActive] = useState(null);
    // const secciones = useRef([]);

    // const handleScroll = () => {
    //     const pageYOffset = window.pageYOffset;
    //     let newActive = null;

    //     secciones.current.forEach( seccion => {
    //         const seccionOffsetTop = seccion.offsetTop;
    //         const seccionAltura = seccion.offsetHeight;

    //         if( pageYOffset >= seccionOffsetTop && pageYOffset < seccionOffsetTop + seccionAltura ){
    //             newActive = seccion.id
    //         }
    //     });

    //     setActive( newActive );
    // }

    // useEffect(() => {
    //     secciones.current = document.querySelectorAll("SECTION");
    //     window.addEventListener( "scroll", handleScroll );
    
    //     return () => {
    //         window.removeEventListener( "scroll", handleScroll );
    //     }
    // }, []);
    

    const menuResponsive = () => {
        setMostrar( !mostrar )
    }

    const quitarMenu = () => {
        setMostrar( false )
    }

    return (
        <nav className="navMenu">
            <div className="contenedor">
                <div className="barra">
                    <a onClick={ quitarMenu } href="#inicio" className="navMenu-logo">Portafolio</a>

                    <div className="responsive-menu" onClick={ menuResponsive }>
                        <i className="fas fa-bars"></i>
                    </div>
                </div>

                <ul className={`ulNavMenu ${ mostrar ? "mostrar" : "" }`}>
                    <li onClick={ quitarMenu }>
                        <a 
                            href="#inicio" 
                            className="liNavMenu"
                            // className={`liNavMenu ${ active == "inicio" ? "active" : "" }`}
                        >Inicio</a>
                    </li>

                    <li onClick={ quitarMenu }>
                        <a 
                            href="#about" 
                            className="liNavMenu"
                        >Sobre Mí</a>
                    </li>

                    <li onClick={ quitarMenu }>
                        <a 
                            href="#proyectos" 
                            className="liNavMenu"
                        >Proyectos</a>
                    </li>

                    <li onClick={ quitarMenu }>
                        <a 
                            href="#tecnologias" 
                            className="liNavMenu"
                        >Tecnologías</a>
                    </li>

                    <li onClick={ quitarMenu }>
                        <a 
                            href="#contacto" 
                            className="liNavMenu"
                        >Contacto</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
