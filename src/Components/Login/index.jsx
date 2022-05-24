import { useEffect, useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";

import { GetContext } from '../../Context/firebaseContext'
import { auth } from '../../services/index'
import { Header } from '../header/index'

// import './styles.css'
import { GetAppContext } from '../../Context/appContext';

const Login = (props) => {
  // estados
  const [credentials, setCredentials] = useState({ email: "", passwd: "" })
  const [error, setError] = useState({ err: false, msg: "" })

  // context
  const { user } = GetContext()
  const { login, setLogin } = GetAppContext()

  // para navegar entre paginas
  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault()
    // firebase function: createUserWithEmailAndPassword
    signInWithEmailAndPassword(auth, credentials.email, credentials.passwd)
      .then(currentUser => {
        // si todo salio bien, navega para -> /app/main
        // console.log(currentUser)
        setLogin(!login) // cambio el estado porque se ha loggeado un usr
        navigate("/app/main")
      }).catch(err => {
        // si hay un error, muestra el error
        console.warn(err)
        setError({ err: true, msg: err.message })
      })

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

  /* error
    if (!!user) {
      navigate("/app/main")
    } */
  // no error
  if (!!user) return <Navigate to={'/app/main'} />

  return (
    <section>
      <Header />
      <form onSubmit={handleSubmit} class="bg-white border-2 flex mt-5 px-5 flex-col mx-auto max-w-xs shadow-lg rounded py-9">
        <h2 class="text-2xl font-bold text-center">Iniciar Sesión</h2>
        <label class="mt-4 text-lg font-semibold">Correo:</label>
        <input value={credentials.email} name="email" onChange={handleChange} class="border-2 p-1" type="text" />
        <label class="mt-4 text-lg font-semibold">Password:</label>
        <input name="passwd" value={credentials.passwd} onChange={handleChange} class="border-2 p-1" type="password" />
        <button class="mt-9 text-white text-lg font-semibold w-36 mx-auto py-2 rounded bg-gradient-to-r from-yellow-500 to-orange-500" type="submit">Login</button>
      </form>
      {error.err && <div className="error">{error.msg}</div>}
    </section>
  )
}

export { Login }