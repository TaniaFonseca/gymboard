import RoutineForm from "../components/RoutineForm";
import RoutineCard from "../components/RoutineCard";

export default function Routines() {
  const routines = [
    { id: 1, title: "Rutina de fuerza", description: "Entrenamiento de pesas" },
    { id: 2, title: "Rutina de cardio", description: "Ejercicios aeróbicos" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Rutina guardada ✅");
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Rutinas</h2>
      <RoutineForm onSubmit={handleSubmit} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {routines.map((r) => (
          <RoutineCard key={r.id} routine={r} />
        ))}
      </div>
    </div>
  );
}
