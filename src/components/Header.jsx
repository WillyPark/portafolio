import { NavMenu } from "./NavMenu"

export const Header = () => {
  return (
    <div className="header" id="inicio">
        <NavMenu />

        <div className="header-titulo">
          <h1 className="nombre">Luis Enrique Jiménez León</h1>
          <h2 className="puesto">Desarrollador Full Stack</h2>

          <a className="cv" href="./document/cv-luis.pdf" target="_blank">Descargar CV</a>
        </div>
    </div>
  )
}
