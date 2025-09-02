export default function ExerciseCard({ exercise }) {
  return (
    <div className="bg-gray-100 p-4 rounded shadow-md">
      <h3 className="font-bold">{exercise.nombre}</h3>
      <p className="text-sm text-gray-700">{exercise.descripcion}</p>
      <p className="text-sm text-gray-700">{exercise.musculo_objetivo}</p>
    </div>
  );
}