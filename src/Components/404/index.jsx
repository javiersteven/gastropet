import { useLocation } from "react-router-dom"

const NotFound = () => {
  let location = useLocation()
  return (
    <div class="h-full flex flex-col items-center justify-center">
      <section class="py-10 px-8 gap-y-10 bg-white rounded-md mx-auto max-w-md text-center">
        <h1 class="text mb-3 bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-9xl font-extrabold text-transparent">404</h1>
        <h2 class="text-2xl font-semibold">Por favor digite una ruta valida: <span class="text-yellow-500">{location.pathname}</span></h2>
      </section>
    </div>
  )
}

export { NotFound }