export const Pianosmania = () => {
    return (
        <div className="proyecto">
            <div className="proyecto-imagen">
                <img loading="lazy" src="/img/pianosmania.jpg" alt="Pianosmania" />
            </div>

            <div className="proyecto-informacion">
                <h3>Pianosmania</h3>

                <p>Es una pequeña página web en la que muestro vídeos mios tocando el piano. Cuenta con diseño responsivo.</p>

                <p>Las tecnologías empleadas para el proyecto fueron:</p>
                <p className="proyecto-tecnologias">React, React-router-doom, Swiper y SASS</p>

                <div className="proyecto-enlace">
                    <a className="" href="https://pianosmania.netlify.app/" target="_blank">Ver Proyecto</a>
                </div>
            </div>
        </div>
    )
}
