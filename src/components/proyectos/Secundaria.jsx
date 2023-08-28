export const Secundaria = () => {
    return (
        <div className="proyecto">
            <div className="proyecto-imagen">
                <img loading="lazy" src="./img/secundaria.jpg" alt="Pianosmania" />
            </div>

            <div className="proyecto-informacion">
                <h3>Secundaria</h3>

                <p>Aplicación para la gestión de clases en línea de una secundaria, incluye roles de usuarios (Alumno, Profesor y Administrador), reseteo de contraseñas, CRUD de las clases y diseño responsivo.</p>

                <p>Las tecnologías empleadas para el proyecto fueron:</p>
                <p className="proyecto-tecnologias">HTML, CSS, JavaScript, PHP, MVC y MySQL</p>

                <div className="proyecto-enlace">
                    <a className="" href="http://secundaria123.infinityfreeapp.com/" target="_blank">Ver Proyecto</a>
                </div>
            </div>
        </div>
    )
}
