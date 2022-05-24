import { Link } from 'react-router-dom'

const HeaderApp = ({ user }) => {
  console.log("context in Header App", user)

  return (
      <header class="flex md:flex-row md:justify-center md:gap-x-20 flex-col bg-white p-4">
        <div class="flex items-center justify-center gap-x-16">
          <h1 class="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-5xl font-extrabold text-transparent">GastroPet</h1>
        </div>
        <nav class="mt-3 flex items-center justify-center gap-x-6 text-xl font-semibold">
          <Link class="transition-all hover:cursor-pointer hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:bg-clip-text hover:text-2xl hover:text-transparent" to="/app/main/stats">Estadisticas</Link>
          <Link class="transition-all hover:cursor-pointer hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:bg-clip-text hover:text-2xl hover:text-transparent" to="/app/main/">Home</Link>
          <Link class="transition-all hover:cursor-pointer hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:bg-clip-text hover:text-2xl hover:text-transparent" to="/app/main/user">Usuario</Link>
        </nav>
      </header>
  )
}

export { HeaderApp }