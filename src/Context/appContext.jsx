import { createContext, useState, useContext, useEffect } from "react";

// creación del contexto
const AppContext = createContext({});

// componente provider con todos los estados de la App
const AppContextProvider = ({ children }) => {
  const [uid, setUid] = useState(true)

  return (
    <AppContext.Provider value={{
      uid,
      setUid
    }}>
      {children}
    </AppContext.Provider>
  )
}

// función que facilita obtener el contexto
const GetAppContext = () => {
  const context = useContext(AppContext)
  return context
}

export { GetAppContext, AppContextProvider }