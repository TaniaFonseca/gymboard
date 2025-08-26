// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react"; // 👈 importa useEffect
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Perfil from "./pages/Profile";
import Ejercicios from "./pages/Exercises";
import Rutinas from "./pages/Routines";
import RutinaDetalle from "./pages/RoutineDetail";
import { seedData } from "./utils/seed"; // 👈 import seedData

function App() {
  // Ejecutar seedData una sola vez al cargar la app
  useEffect(() => {
    seedData();
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Navbar visible en todas las páginas */}
        <Navbar />

        {/* Contenido de cada página */}
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Profile" element={<Perfil />} />
            <Route path="/Exercises" element={<Ejercicios />} />
            <Route path="/Routines" element={<Rutinas />} />
            <Route path="/Routines/:id" element={<RutinaDetalle />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
