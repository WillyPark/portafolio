import { NavMenu } from "./NavMenu"
import { Particulas } from "./Particulas/Particulas"

export const Header = () => {
  return (
    <div className="header" id="inicio">
        <NavMenu />

        <div className="header-titulo">
          <h1 className="nombre">Luis Enrique Jiménez León</h1>
          <h2 className="puesto">Desarrollador Web Full Stack Jr.</h2>

          <a className="cv" href="./document/cv-luis.pdf" target="_blank">Descargar CV</a>
        </div>

        <div className="contenedor-particulas">
          <Particulas />
        </div>
    </div>
  )
}
