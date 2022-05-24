import { HeaderApp } from "./Header/HeaderApp"
import { signOut } from "firebase/auth"
import { auth } from "../../services/index"
import {useNavigate } from 'react-router-dom'

const SignOutUser = () => {
  const navigate = useNavigate()
  const onClickHandler = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out success")
        navigate("/login")
      })
      .catch(err => console.warn(err.message))
  }
  return (
    <button onClick={onClickHandler} class="rounded-lg bg-red-600 px-3 py-2 text-lg font-semibold text-white shadow-md shadow-red-500 transition-all hover:bg-red-500 active:translate-x-1 active:translate-y-1 active:transform" type="submit">Cerrar Sesión</button>
  )
}

const User = (props) => {
  console.log(props.user)
  return (
    <div>
      <HeaderApp />
      <h1>User</h1>
      <SignOutUser />
    </div>
  )
}

export { User }