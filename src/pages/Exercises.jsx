import { useState, useEffect } from "react";
import ExerciseForm from "../components/ExerciseForm";
import ExerciseCard from "../components/ExerciseCard";
import {
  getEjercicios,
  createEjercicio,
  updateEjercicio,
  deleteEjercicio,
} from "../api/ejercicios"; // 👈 importa tus funciones de API

export default function Exercises() {
  const [exercises, setExercises] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({ name: "", description: "" });
  const [loading, setLoading] = useState(true);

  // --- Cargar datos del backend al montar ---
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getEjercicios();
        setExercises(data);
      } catch (error) {
        console.error("Error al cargar ejercicios:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // --- Guardar o editar ejercicio ---
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingIndex !== null) {
        // 🟡 Editar
        const exerciseToEdit = exercises[editingIndex];
        const { data } = await updateEjercicio(exerciseToEdit.id, formData);

        const updated = [...exercises];
        updated[editingIndex] = data;
        setExercises(updated);
        setEditingIndex(null);
      } else {
        // 🟢 Crear
        const { data } = await createEjercicio(formData);
        setExercises([...exercises, data]);
      }

      setFormData({ name: "", description: "" });
    } catch (error) {
      console.error("Error al guardar ejercicio:", error);
    }
  };

  // --- Editar desde botón ---
  const handleEdit = (index) => {
    setFormData(exercises[index]);
    setEditingIndex(index);
  };

  // --- Eliminar ---
  const handleDelete = async (index) => {
    try {
      const exerciseToDelete = exercises[index];
      await deleteEjercicio(exerciseToDelete.id);

      const filtered = exercises.filter((_, i) => i !== index);
      setExercises(filtered);
    } catch (error) {
      console.error("Error al eliminar ejercicio:", error);
    }
  };

  if (loading) return <p className="p-6">Cargando ejercicios...</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Mis Ejercicios</h2>

      {/* Formulario */}
      <ExerciseForm
        onSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
        editing={editingIndex !== null}
      />

      {/* Lista de tarjetas */}
      <div className="grid gap-4 mt-6">
        {exercises.map((exercise, index) => (
          <div key={exercise.id || index} className="relative">
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
