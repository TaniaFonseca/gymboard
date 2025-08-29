
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/NavBar.jsx";
import Home from "./pages/Home";
import Perfil from "./pages/Profile";
import Ejercicios from "./pages/Exercises";
import Rutinas from "./pages/Routines";
import RutinaDetalle from "./pages/RoutineDetail";

import { seedData } from "./utils/seed";

export default function App() {
  const [booted, setBooted] = useState(false);

  useEffect(() => {

    seedData();
    setBooted(true);
  }, []);

  if (!booted) return null;

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Perfil />} />
            <Route path="/exercises" element={<Ejercicios />} />
            <Route path="/routines" element={<Rutinas />} />
            <Route path="/routines/:id" element={<RutinaDetalle />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
