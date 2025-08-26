export default function CompletionTracker({ completed, total }) {
  return (
    <div className="bg-green-100 p-4 rounded shadow-md">
      <h3 className="font-bold mb-2">Progreso</h3>
      <p>
        {completed} de {total} ejercicios completados ✅
      </p>
    </div>
  );
}
