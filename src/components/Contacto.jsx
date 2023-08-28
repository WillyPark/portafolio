export const Contacto = () => {
    return (
        <section className="seccion" id="contacto">
            <div className="contenedor">
                <h2>Contacto</h2>

                <div className="contacto">
                    <div className="contacto-cv">
                        <p>Envíame un correo o contactame mediante cualquiera de mis redes</p>

                        <div className="btn-cv">
                            <a href="./document/cv-luis.pdf" target="_blank">Descargar CV</a>
                        </div>
                    </div>

                    <div className="menu-redes">
                        <a href="mailto:l.jimenez.leon97@gmail.com"><i className="far fa-envelope"></i></a>
                        <a href="www.linkedin.com/in/luis-enrique-jiménez-león-19b149185"><i className="fab fa-linkedin"></i></a>
                        <a href="https://www.instagram.com/william_park5/"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </section>
    )
}
