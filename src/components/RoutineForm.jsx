import { useState, useEffect } from "react";

export default function RoutineForm({ onSubmit, exercisesList, initialData }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setDescription(initialData.description);
      setExercises(initialData.exercises || []);
    } else {
      setTitle("");
      setDescription("");
      setExercises([]);
    }
  }, [initialData]);

  const handleAddExercise = () => {
    setExercises([...exercises, { name: "", series: "", reps: "" }]);
  };

  const handleExerciseChange = (index, field, value) => {
    const updated = exercises.map((ex, i) =>
      i === index ? { ...ex, [field]: value } : ex
    );
    setExercises(updated);
  };

  const handleRemoveExercise = (index) => {
    setExercises(exercises.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, exercises });

    if (!initialData) {
      setTitle("");
      setDescription("");
      setExercises([]);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-300 shadow-md p-6 rounded-xl mb-6 max-w-lg mx-auto"
    >
      <h3 className="font-bold text-lg mb-4 text-gray-800">
        {initialData ? "Editar Rutina " : "Nueva Rutina "}
      </h3>


      <div className="mb-4">
        <label className="block font-medium text-gray-700 mb-1">
          Título
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Ej: Rutina Pecho y Bíceps"
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          required
        />
      </div>

 
      <div className="mb-4">
        <label className="block font-medium text-gray-700 mb-1">
          Descripción
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descripción de la rutina"
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
        />
      </div>


      <h4 className="font-semibold text-gray-800 mb-2">Ejercicios</h4>
      {exercises.map((ex, index) => (
        <div
          key={index}
          className="flex items-center gap-2 mb-3 p-3 border border-gray-200 rounded-lg bg-gray-50"
        >
          <select
            value={ex.name}
            onChange={(e) => handleExerciseChange(index, "name", e.target.value)}
            className="p-2 border border-gray-300 rounded-lg flex-1 focus:ring-2 focus:ring-blue-400 outline-none"
            required
          >
            <option value="">Selecciona un ejercicio</option>
            {exercisesList.map((option, i) => (
              <option key={i} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>

          <input
            type="number"
            placeholder="Series"
            value={ex.series}
            onChange={(e) => handleExerciseChange(index, "series", e.target.value)}
            className="w-20 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />

          <input
            type="number"
            placeholder="Reps"
            value={ex.reps}
            onChange={(e) => handleExerciseChange(index, "reps", e.target.value)}
            className="w-20 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />

          <button
            type="button"
            onClick={() => handleRemoveExercise(index)}
            className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600"
          >
            ✖
          </button>
        </div>
      ))}


      <button
        type="button"
        onClick={handleAddExercise}
        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 mb-4"
      >
        + Agregar Ejercicio
      </button>


      <div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 font-semibold"
        >
          {initialData ? "Actualizar ✏️" : "Guardar ✅"}
        </button>
      </div>
    </form>
  );
}
