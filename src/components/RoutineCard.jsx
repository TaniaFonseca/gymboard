import { Link } from "react-router-dom";

export default function RoutineCard({ routine, onMarcarCumplida, onDelete, onEdit }) {
  return (
    <div className="bg-gray-100 p-4 rounded shadow-md">
      <h3 className="font-bold">{routine.title}</h3>
      <p className="text-sm text-gray-700">{routine.description}</p>

      <div className="mt-3 flex flex-wrap items-center gap-3">
        <Link to={`/routines/${routine.id}`} className="text-blue-600 hover:underline">
          Ver detalle
        </Link>

        <button
          onClick={() => onMarcarCumplida(routine.id)}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
        >
          ✅ Cumplida
        </button>

        <button
          onClick={() => {
            const nuevoTitulo = prompt("Nuevo título:", routine.title);
            const nuevaDescripcion = prompt("Nueva descripción:", routine.description);
            if (nuevoTitulo || nuevaDescripcion) {
              onEdit(routine.id, {
                title: nuevoTitulo || routine.title,
                description: nuevaDescripcion || routine.description,
              });
            }
          }}
          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
        >
          ✏️ Editar
        </button>

        <button
          onClick={() => onDelete(routine.id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          ❌ Eliminar
        </button>
      </div>
    </div>
  );
}
