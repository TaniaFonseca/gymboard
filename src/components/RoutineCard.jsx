import { Link } from "react-router-dom";

export default function RoutineCard({ routine }) {
  return (
    <div className="bg-gray-100 p-4 rounded shadow-md">
      <h3 className="font-bold">{routine.title}</h3>
      <p className="text-sm text-gray-700">{routine.description}</p>
      <Link
        to={`/routines/${routine.id}`}
        className="text-blue-600 hover:underline"
      >
        Ver detalle
      </Link>
    </div>
  );
}
