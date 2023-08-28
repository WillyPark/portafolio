export const NavMenu = () => {
    return (
        <nav className="navMenu">
            <div className="contenedor">
                <div className="responsive-menu">
                    <i className="fas fa-bars"></i>
                </div>

                <ul className="ulNavMenu">
                    <li><a href="#inicio" className="liNavMenu">Inicio</a></li>
                    <li><a href="#about" className="liNavMenu">Sobre Mi</a></li>
                    <li><a href="#proyectos" className="liNavMenu">Proyectos</a></li>
                    <li><a href="#tecnologias" className="liNavMenu">Tecnologías</a></li>
                    <li><a href="#contacto" className="liNavMenu">Contacto</a></li>
                </ul>
            </div>
        </nav>
    )
}
