import { Navigate } from "react-router-dom"
import { GetContext } from "../../Context/firebaseContext"

const ProtectedRoute = ({ children }) => {
    const { user } = GetContext()

    if (!user) return <Navigate to={'/login'} />

    return <>{children}</>
}

export { ProtectedRoute }