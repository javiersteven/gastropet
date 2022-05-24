import { useEffect, useState } from 'react'
import { getDatabase, ref, set, get, child, onValue, push } from "firebase/database";

const writeData = (uid, pastData, { alimento, fecha, calorias }) => {
  const db = getDatabase();
  const usersRef = ref(db, 'users/' + uid)

  set(usersRef, [...pastData, { alimento, fecha, calorias }]);
}

const Enviado = ({ enviado }) => {
  return (
    enviado && (
      <div class="flex flex-col items-center justify-center">
        <h1 class="text-center text-2xl font-bold">¡Enviado!</h1>
        <p class="text-center text-xl">
          Hemos recibido tu información.
        </p>
      </div>
    )
  )
}

const Modal = ({ show, setShow, userid }) => {
  const [food, setFood] = useState("")
  const [enviado, setEnviado] = useState(false)
  const [data, setData]= useState([])

  function readData(uid) {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${uid}`)).then((snapshot) => {
      if (snapshot.exists()) {
        setData(snapshot.val())
        console.log("data available");
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }
  useEffect(() => {
    readData(userid)
  }, [])

  console.log("data in Modal Component: ", data)
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Datos procesados: ", food)
    // appendData(userid, { "alimento": food, "calorias": Math.random() * 100, "fecha": new Date().toDateString() })
    writeData(userid, data, { "alimento": food, "calorias": Math.random() * 100, "fecha": new Date().toDateString() })
    setEnviado(true)
    setFood("")
    setTimeout(() => {
      setEnviado(false)
      setShow(!show)
    }, 1200)
  }

  const handleChange = (event) => {
    setFood(event.target.value)
  }

  return (
    show && (
      <div class="fixed left-0 right-0 top-0 bottom-0 bg-gray-200/90 ">
        <form onSubmit={handleSubmit} class="mt-40 mx-auto flex w-80 flex-col rounded border-2 bg-white px-5 py-7 shadow-lg">
          <h2 class="text-center text-2xl font-bold">Añadir Alimento</h2>
          <label class="mt-4 text-lg font-semibold">¿Qué has comido?</label>
          <input class="mt-2 border-2 p-1" value={food} type="text" onChange={handleChange} />
          <div class="mx-auto mt-7">
            <button class="mx-auto mr-3 w-28 rounded-sm bg-gradient-to-r from-green-700 to-green-600 py-1 text-lg font-semibold text-white shadow-lg shadow-green-300">Añadir</button>
            <button onClick={() => setShow(!show)} class="mx-auto w-28 rounded-sm bg-gradient-to-r from-red-700 to-red-600 py-1 text-lg font-semibold text-white shadow-lg shadow-red-300">Salir</button>
          </div>
        </form>
        <Enviado enviado={enviado} />
      </div>
    )
  )
}

export { Modal }