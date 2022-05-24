import { Route, Routes, useNavigate, Navigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'

import { AuthProvider, GetContext } from './Context/firebaseContext'
import { AppContextProvider } from './Context/appContext'
import { Home } from './Components/home/index'
import { SignUp } from './Components/Signup/index'
import { Login } from './Components/Login/index'
import { Main } from './Components/App/index'
import { NotFound } from './Components/404/index'
import { ProtectedRoute } from './Components/protectedRoute/index'

import { Access } from './Components/Access/index'
import { Stats } from './Components/App/Stats'
import { User } from './Components/App/User'

function login(email, passwd) {
  signInWithEmailAndPassword(auth, credentials.email, credentials.passwd)
}

function App() {
  const context = GetContext()
  return (
    <main class="min-h-screen bg-gradient-to-r from-yellow-500 to-orange-500">
      <AppContextProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/app/main" functionHandler={login} />} />
            <Route path="/aboutus" element={<Home />} />
            <Route path="/login" element={
              <Login />
            } />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/app/main/" element={
              <ProtectedRoute>
                <Main />
              </ProtectedRoute>
            } />
            <Route path="/app/main/stats" element={<Stats context={context} />}/>
            <Route path="/app/main/user" element={<User context={context} />}/>
            <Route path="/test" element={<Access type="Login" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </AppContextProvider>
    </main>
  )
}

export { App }
