import { useState } from 'react'
import { Pet } from './pet/pet'


const MainApp = ({show, setShow}) => {
  const [eating, setEating] = useState(false)
  return (
    <section class="gap-y-5">
      <article class="mt-6 flex items-center justify-center">
        <div class="flex max-w-xs flex-col items-center rounded-xl bg-white py-6 px-20 shadow-lg shadow-red-500/40">
          <Pet />
          <h2 class="my-2 bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-4xl font-bold text-transparent">Sammy</h2>
        </div>
      </article>
      <div class="flex justify-center">
        <button onClick={() => setShow(!show)} class="hover:bg-green-400 active:border-0 transition-all active:transform active:translate-y-1 focus:ring mt-6 text-white border-2 border-white bg-green-500 py-2 px-3 rounded text-lg font-semibold">Añadir Alimento</button>
      </div>
    </section>
  )
}

export { MainApp }