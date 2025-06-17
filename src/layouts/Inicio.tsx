import Carrusel from "../components/Carrusel/Carrusel"
import Descripcion from "../ui/App/Descripcion"
import Navegacion from "../ui/App/Navegacion"
import Social from "../ui/App/Social"
import Video from "../ui/App/Video"

function Inicio() {
  return (
    <>
      <Navegacion/>
      <main>
        <div className="flex justify-center">
          <Carrusel />
        </div>
        <Descripcion />
       <Video />
      </main>
      <footer className="">
        <h1 className="bg-[#f5ca88] text-center text-3xl font-bold p-3">CONTACTANOS</h1>
        <Social />
      </footer>
    </>
  )
}

export default Inicio
