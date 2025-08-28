import { useState, useEffect } from "react";
import ExerciseForm from "../components/ExerciseForm";
import ExerciseCard from "../components/ExerciseCard";

export default function Exercises() {
  const [exercises, setExercises] = useState(() => {
    const data = localStorage.getItem("exercises");
    return data ? JSON.parse(data) : [];
  });

  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({ name: "", description: "" });

  // --- Guardar en localStorage cada vez que cambie exercises ---
  useEffect(() => {
    localStorage.setItem("exercises", JSON.stringify(exercises));
  }, [exercises]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingIndex !== null) {
      const updated = [...exercises];
      updated[editingIndex] = formData;
      setExercises(updated);
      setEditingIndex(null);
    } else {
      setExercises([...exercises, formData]);
    }

    setFormData({ name: "", description: "" });
  };

  const handleEdit = (index) => {
    setFormData(exercises[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const filtered = exercises.filter((_, i) => i !== index);
    setExercises(filtered);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Mis Ejercicios</h2>

      <ExerciseForm
        onSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
        editing={editingIndex !== null}
      />

      <div className="grid gap-4 mt-6">
        {exercises.map((exercise, index) => (
          <div key={index} className="relative">
            <ExerciseCard exercise={exercise} />
            <div className="absolute top-2 right-2 flex gap-2">
              <button
                onClick={() => handleEdit(index)}
                className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
