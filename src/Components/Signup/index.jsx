import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";

import { GetContext } from '../../Context/firebaseContext'
import { auth } from '../../services/index'

import { Header } from '../header/index';

const SignUp = (props) => {
  // estados
  const [credentials, setCredentials] = useState({ email: "", passwd: "" })
  const [error, setError] = useState({ err: false, msg: "" })

  // contexto
  const context = GetContext()

  // para navegar entre paginas
  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault()
    // firebase function: signInWithEmailAndPassword
    createUserWithEmailAndPassword(auth, credentials.email, credentials.passwd)
      .then(res => {
        // si todo salio bien, navega para -> /app/main
        console.log(res)
        navigate("/app/main")
      }).catch(err => {
        // si hay un error, muestra el error
        console.warn(err)
        setError({ err: true, msg: err.message })
      })

    // finalizando todo el proceso
    // limpia los espacios de los inputs
    // y cambia el estado logged en el contexto
    console.log("aquí")
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

  return <section>
    <Header />
    <form onSubmit={handleSubmit} class="bg-white border-2 flex mt-5 px-5 flex-col mx-auto max-w-xs shadow-lg rounded py-9">
      <h2 class="text-2xl font-bold text-center">Registrarse</h2>
      <label class="mt-4 text-lg font-semibold">Correo:</label>
      <input class="border-2 p-1" name="email" value={credentials.email} onChange={handleChange} type="text" />
      <label class="mt-4 text-lg font-semibold">Password:</label>
      <input class="border-2 p-1" name="passwd" value={credentials.passwd} onChange={handleChange} type="password" />
      <button class="mt-9 text-white text-lg font-semibold w-36 mx-auto py-2 rounded bg-gradient-to-r from-yellow-500 to-orange-500" type="submit">Registrarse</button>
    </form>
    {error.err && <div className="error">{error.msg}</div>}
  </section>
}

export { SignUp }