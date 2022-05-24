import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center bg-white p-4">
      <h1 className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-5xl font-extrabold text-transparent">GastroPet</h1>
      <nav className="mt-2 p-4 text-xl font-medium transition-all">
        <Link className="transition-all hover:bg-gradient-to-r hover:font-bold hover:from-purple-600 hover:to-blue-600 hover:relative hover:bg-clip-text hover:text-2xl hover:text-transparent" to="/signup/">SignUp</Link>
        <Link className="mx-8 hover:bg-gradient-to-r hover:font-bold hover:from-purple-600 hover:to-blue-600 hover:relative hover:bg-clip-text hover:text-2xl hover:text-transparent" to="/login/">Login</Link>
        <Link className="transition-all hover:bg-gradient-to-r hover:font-bold hover:from-purple-600 hover:to-blue-600 hover:relative hover:bg-clip-text hover:text-2xl hover:text-transparent" to="/aboutus/">About Us</Link>
      </nav>
    </header>
  )
}

export { Header }