import { HeaderApp } from "./Header/HeaderApp"
import { getDatabase, ref, child, get } from "firebase/database";
import { GetAppContext } from "../../Context/appContext";
import { useEffect, useState } from "react";

const Stats = ({ context }) => {
  const [data, setData] = useState()
  const { uid } = GetAppContext()

  function readData(uid) {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${uid}`)).then((snapshot) => {
      if (snapshot.exists()) {
        setData(snapshot.val())
        console.log("data exists!");
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  useEffect(() => {
    readData(uid)
  }, [])

  return (
    <section>
      <HeaderApp />
      <div class="flex flex-col items-center">
        <table class="max-w-md m-10 table-fixed border bg-white">
          <thead>
            <tr>
              <th class="p-3 w-2/6 border-2 border-yellow-400 bg-yellow-200">Comida</th>
              <th class="p-3 w-2/6 border-2 border-blue-400 bg-blue-200">Fecha</th>
              <th class="p-3 w-2/6 border-2 border-red-400 bg-red-200">Cant. Calorias</th>
            </tr>
          </thead>
          <tbody>
            {
              data?.map(da => (
                <tr>
                  <td class="border-2 p-2 text-center">{da.alimento}</td>
                  <td class="border-2 p-2 text-center">{da.fecha}</td>
                  <td class="border-2 p-2 text-center">{da.calorias}</td>
                </tr>
              )
              )
            }
          </tbody>
        </table>
      </div>
    </section>
  )
}

export { Stats }