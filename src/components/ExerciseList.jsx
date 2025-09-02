import { useExercises } from "../domain/useExercises";
import ExerciseCard from "./ExerciseCard";

export default function ExerciseList() {
  const { data, loading, error } = useExercises();
  
  console.log("📦 Data desde hook:", data);

  if (loading) return <p>Cargando ejercicios...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map((exercise) => (
        <ExerciseCard key={exercise.id_ejercicio} exercise={exercise} />
      ))}
    </div>
  );
}
