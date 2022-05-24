import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GetContext } from '../../Context/firebaseContext'

// TODO: Implementar un componente que
// TODO: reciba la función que hará (Access, register)
// TODO: y que sea reutilizable en las rutas.

const Access = ({type, functionHandler}) => {
    // estados
    const [credentials, setCredentials] = useState({ email: "", passwd: "" })
    const [error, setError] = useState({ err: false, msg: "" })

    // context
    const { user } = GetContext()

    // para navegar entre paginas
    let navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault()
        // firebase function: createUserWithEmailAndPassword
        // función que se encarga de hacer LOGIN o REGISTRO
        try {
            functionHandler()
        } catch (e) {
            console.warn(e.message)
        }

        // finalizando todo el proceso
        // limpia los espacios de los inputs
        // y cambia el estado logged en el contexto
        setCredentials({ email: "", passwd: "" })
    }

    // cambio 1
    // ahora esta en una sola función
    function handleChange(e) {
        if (e.target.name === "email") {
            setCredentials({ ...credentials, email: e.target.value })
        } else {
            setCredentials({ ...credentials, passwd: e.target.value })
        }
    }

    if (!!user) {
        navigate("/app/main")
    }

    return (
        <div className="container">
            <h2>{type}</h2>
            {error.err && <div className="error">{error.msg}</div>}
            <form onSubmit={handleSubmit}>
                <label>Correo:</label>
                <input name="email" value={credentials.email} onChange={handleChange} type="text" />
                <label>Password:</label>
                <input name="passwd" value={credentials.passwd} onChange={handleChange} type="password" />
                <button type="submit">{type}</button>
            </form>
        </div>
    )
}

export { Access }