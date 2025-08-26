import ExerciseForm from "../components/ExerciseForm";
import ExerciseCard from "../components/ExerciseCard";

export default function Exercises() {
  const exercises = [
    { id: 1, name: "Sentadillas", description: "Piernas y glúteos" },
    { id: 2, name: "Flexiones", description: "Pecho y brazos" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Ejercicio guardado ✅");
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Ejercicios</h2>
      <ExerciseForm onSubmit={handleSubmit} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {exercises.map((ex) => (
          <ExerciseCard key={ex.id} exercise={ex} />
        ))}
      </div>
    </div>
  );
}
