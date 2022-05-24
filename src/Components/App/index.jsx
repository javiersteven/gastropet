import { signOut } from "firebase/auth"

import { HeaderApp } from "./Header/HeaderApp"
import { MainApp } from './mainApp'
import { auth } from "../../services/index"
import { GetContext } from "../../Context/firebaseContext"
import { GetAppContext } from "../../Context/appContext"
import { Modal } from "./Modal"
import { useState } from "react"

const SignOutUser = () => {
  const onClickHandler = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out success")
        // navigate("/login")
      })
      .catch(err => console.warn(err.message))
  }
  return (
    <button onClick={onClickHandler} type="submit">Cerrar Sesión</button>
  )
}

const Main = () => {
  const { setUid } = GetAppContext()
  const [showModal, setShowModal] = useState(false)
  const { user } = GetContext()
  const { uid } = user

  setUid(uid) // estado global

  return (
    <div>
      <HeaderApp />
      <MainApp show={showModal} setShow={setShowModal} />
      <Modal userid={uid} show={showModal} setShow={setShowModal} />
    </div>
  )
}

export { Main, SignOutUser }