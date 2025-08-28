import { useState } from "react";

export default function RoutineForm({ onSubmit, exercisesList }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [selectedExercise, setSelectedExercise] = useState("");
  const [series, setSeries] = useState("");
  const [reps, setReps] = useState("");
  const [exercises, setExercises] = useState([]);

  const handleAddExercise = (e) => {
    e.preventDefault();
    if (!selectedExercise || !series || !reps) return;

    const exObj = exercisesList.find((ex) => ex.id === parseInt(selectedExercise, 10));
    setExercises([
      ...exercises,
      { id: exObj.id, name: exObj.name, series: parseInt(series, 10), reps: parseInt(reps, 10) },
    ]);

    setSelectedExercise("");
    setSeries("");
    setReps("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmit({ title, description, exercises });
    setTitle("");
    setDescription("");
    setExercises([]);
  };

  const handleRemoveExercise = (id) => {
    setExercises(exercises.filter((e) => e.id !== id));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md flex flex-col gap-3">

      <input
        type="text"
        placeholder="Nombre de la rutina"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded"
      />

      <textarea
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 rounded"
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        <select
          value={selectedExercise}
          onChange={(e) => setSelectedExercise(e.target.value)}
          className="border p-2 rounded md:col-span-2"
        >
          <option value="">Selecciona un ejercicio</option>
          {exercisesList.map((ex) => (
            <option key={ex.id} value={ex.id}>{ex.name}</option>
          ))}
        </select>

        <input
          type="number"
          min="1"
          placeholder="Series"
          value={series}
          onChange={(e) => setSeries(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          min="1"
          placeholder="Repeticiones"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          className="border p-2 rounded"
        />
        <button onClick={handleAddExercise} className="md:col-span-4 bg-gray-800 text-white px-4 py-2 rounded">
          Añadir ejercicio a la rutina
        </button>
      </div>

     
      <div className="bg-gray-50 p-3 rounded border">
        <h4 className="font-semibold mb-2">Ejercicios añadidos</h4>
        {exercises.length === 0 ? (
          <p className="text-sm text-gray-500">Aún no añadiste ejercicios</p>
        ) : (
          <ul className="space-y-1">
            {exercises.map((ex) => (
              <li key={ex.id} className="flex items-center justify-between">
                <span>{ex.name} — {ex.series}x{ex.reps}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveExercise(ex.id)}
                  className="text-red-600 hover:underline text-sm"
                >
                  Quitar
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Guardar rutina
      </button>
    </form>
  );
}
