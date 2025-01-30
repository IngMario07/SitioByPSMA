import { Route, Routes } from "react-router-dom"
import { Inicio } from "../pages/Inicio"
import { Contacto } from "../pages/Contacto"
import { Donaciones } from "../pages/Donaciones"
import { Nosotros } from "../pages/Nosotros"
import { Pauto } from "../pages/Pauto"
import { Servicios } from "../pages/Servicios"
import { Colaboradores } from "../pages/Colaboradores"

export const AppRouter = () => {
  return(
    <>
        <Routes>
          <Route path="/*" element={<Inicio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/donaciones" element={<Donaciones />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/Pauto" element={<Pauto />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/colaboradores" element={<Colaboradores />} />
        </Routes>
    </>
  )
}