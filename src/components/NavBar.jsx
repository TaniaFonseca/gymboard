import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">GYMBOARD</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/Profile" className="hover:text-gray-400">Perfil</Link>
        <Link to="/Exercises" className="hover:text-gray-400">Ejercicios</Link>
        <Link to="/Routines" className="hover:text-gray-400">Rutinas</Link>
      </div>
    </nav>
  );
}
