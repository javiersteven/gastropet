import { createContext, useState, useContext, useEffect } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../services/index'

// creación del contexto
const FirebaseContext = createContext();

// componente provider con todos los estados de la App
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState(true)

  useEffect(() => {
    const unSuscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("state -> currentUser -> ", currentUser)
      setUser(currentUser)
    })

    return () => unSuscribe()
  }, [])
  const context = {
    user,
    setUser,
    loading,
    login,
    setLogin
  }

  return (
    <FirebaseContext.Provider value={context}>
      {children}
    </FirebaseContext.Provider>
  )
}

// función que facilita obtener el contexto
const GetContext = () => {
  const context = useContext(FirebaseContext)
  return context
}

export { GetContext, AuthProvider }