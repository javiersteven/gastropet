import { Header } from '../header/index'

const Home = () => {
    return <>
        <Header />
        <h2>Home</h2>

        <h3>¿Quienes Somos?</h3>
        <p>Somos una empresa de desarrollo de software con principal enfasis en la web.</p>

        <h3>Profe, nos merecemos un 5.0</h3>
        <p>Oh, vamos profe, tan solo mire la funcionalidad del sitio</p>
        <p>Es un maravilla, el codigo es impecable!!</p>

        <h3>¿Cómo usar la app?</h3>
        <p>La app podra presentar a los estudiantes de la carrera de medicina</p>
        <p>Ejercicios para practicar diagnosticos leves</p>

        <h3>¿Cómo funciona?</h3>
        <p>La app esta dividida en secciones donde el usuario podra</p>
        <p>Practicar diferentes diagnosticos. Esto se logrará haciendo </p>
        <p>presentando al usuario distintos sintomas del paciente</p>
        <p>y a modo de quiz el usuario podra elegir un diagnostico.</p>
        <p>Cabe aclarar que <b>los ejercicios seran basicos.</b></p>
    </>
}

export { Home }