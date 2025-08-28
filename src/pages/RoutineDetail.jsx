import { useParams } from "react-router-dom";
import CommentList from "../components/CommentList";
import CompletionTracker from "../components/CompletionTracker";
import { getFromLocalStorage } from "../utils/localStorage";

const KEY = "rutinas";

export default function RoutineDetail() {
  const { id } = useParams();
  const rid = parseInt(id, 10);

  const routines = getFromLocalStorage(KEY) || [];
  const routine = routines.find((r) => r.id === rid);

  if (!routine) {
    return <p className="text-red-600">Rutina no encontrada</p>;
  }

  const total = routine.exercises?.length || 0;
  const completions = routine.detallesCumplimiento || [];
  const completedCount = completions.filter(c => c.estado === "completado").length;

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-1">
        Detalle de Rutina #{routine.id} — {routine.title}
      </h2>
      <p className="text-gray-600 mb-4">{routine.description}</p>

      <CompletionTracker completed={completedCount} total={total} />

      <div className="bg-white shadow-md rounded p-4 mt-6">
        <h3 className="font-bold mb-2">Ejercicios</h3>
        {total === 0 ? (
          <p className="text-gray-500">Esta rutina aún no tiene ejercicios</p>
        ) : (
          <ul className="divide-y">
            {routine.exercises.map((ex) => (
              <li key={ex.id} className="py-2">
                <span className="font-medium">{ex.name}</span> — {ex.series}x{ex.reps}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="bg-white shadow-md rounded p-4 mt-6">
        <h3 className="font-bold mb-2">Cumplimientos</h3>
        {completions.length === 0 ? (
          <p className="text-gray-500">Todavía no has marcado esta rutina como cumplida</p>
        ) : (
          <ul className="divide-y">
            {completions.map((c, idx) => (
              <li key={idx} className="py-2">
                📅 {c.fecha} —{" "}
                <span className={c.estado === "completado" ? "text-green-600" : "text-red-600"}>
                  {c.estado}
                </span>
                {c.notas && <p className="text-sm text-gray-600">{c.notas}</p>}
              </li>
            ))}
          </ul>
        )}
      </div>

      {Array.isArray(routine.comments) && routine.comments.length > 0 && (
        <div className="mt-6">
          <CommentList comments={routine.comments} />
        </div>
      )}
    </div>
  );
}
