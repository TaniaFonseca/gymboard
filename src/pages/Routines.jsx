// src/pages/Routines.jsx
import { useState, useEffect } from "react";
import RoutineForm from "../components/RoutineForm";
import RoutineCard from "../components/RoutineCard";
import { getFromLocalStorage, saveToLocalStorage } from "../utils/localStorage";
import { seedData } from "../utils/seed";

const ROUTINES_KEY = "rutinas";
const EXERCISES_KEY = "exercises";

export default function Routines() {
  const [routines, setRoutines] = useState([]);
  const [exercisesList, setExercisesList] = useState([]);

  useEffect(() => {
    // cargar rutinas
    seedData();
    const data = getFromLocalStorage(ROUTINES_KEY) || [];
    setRoutines(data);

    // cargar ejercicios creados en Exercises.jsx
    const exercises = getFromLocalStorage(EXERCISES_KEY) || [];
    setExercisesList(exercises);
  }, []);

  const persist = (next) => {
    setRoutines(next);
    saveToLocalStorage(ROUTINES_KEY, next);
  };

  const handleCreateRoutine = (newRoutine) => {
    const next = [
      ...routines,
      {
        id: routines.length ? Math.max(...routines.map((r) => r.id)) + 1 : 1,
        title: newRoutine.title,
        description: newRoutine.description,
        exercises: newRoutine.exercises,
        detallesCumplimiento: [],
        comments: [],
      },
    ];
    persist(next);
    alert("Rutina guardada ✅");
  };

  const handleMarcarCumplida = (id) => {
    const fecha = new Date().toISOString().slice(0, 10);
    const next = routines.map((r) =>
      r.id === id
        ? {
            ...r,
            detallesCumplimiento: [
              ...(r.detallesCumplimiento || []),
              { fecha, estado: "completado", notas: "" },
            ],
          }
        : r
    );
    persist(next);
  };

  const handleDeleteRoutine = (id) => {
  if (confirm("¿Seguro que deseas eliminar esta rutina? ❌")) {
    const next = routines.filter((r) => r.id !== id);
    persist(next);
  }
};

const handleEditRoutine = (id, updatedData) => {
  const next = routines.map((r) =>
    r.id === id ? { ...r, ...updatedData } : r
  );
  persist(next);
  alert("Rutina actualizada ✏️");
};

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Rutinas</h2>

      <RoutineForm
        onSubmit={handleCreateRoutine}
        exercisesList={exercisesList} // ahora vienen de localStorage
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {routines.map((routine) => (
          <RoutineCard
            key={routine.id}
            routine={routine}
            onMarcarCumplida={handleMarcarCumplida}
            onDelete={handleDeleteRoutine}     
            onEdit={handleEditRoutine}       
          />
        ))}
      </div>
    </div>
  );
}
