import { useEffect, useState } from "react";
import { 
  getEjercicios, 
  createEjercicio, 
  updateEjercicio, 
  deleteEjercicio 
} from "../api/ejercicios";

export const useExercises = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 🔹 Obtener todos los ejercicios
  const fetchEjercicios = async () => {
    setLoading(true);
    setError("");
    console.log("👉 Llamando a getEjercicios...");

    try {
      const response = await getEjercicios();
      console.log("✅ Respuesta API:", response);
      setData(response.data); // 👈 Importante: usar response.data
    } catch (err) {
      console.error("❌ Error:", err);
      setError(err.message || "Error al obtener ejercicios");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Crear ejercicio
  const addEjercicio = async (nuevoEjercicio) => {
    try {
      const response = await createEjercicio(nuevoEjercicio);
      setData((prev) => [...prev, response.data]); // actualiza estado local
      return response.data;
    } catch (err) {
      console.error("❌ Error creando ejercicio:", err);
      setError(err.message || "Error al crear ejercicio");
    }
  };

  // 🔹 Actualizar ejercicio
  const editEjercicio = async (id, ejercicioActualizado) => {
    try {
      const response = await updateEjercicio(id, ejercicioActualizado);
      setData((prev) =>
        prev.map((ej) => (ej.id === id ? response.data : ej))
      );
      return response.data;
    } catch (err) {
      console.error("❌ Error actualizando ejercicio:", err);
      setError(err.message || "Error al actualizar ejercicio");
    }
  };

  // 🔹 Eliminar ejercicio
  const removeEjercicio = async (id) => {
    try {
      await deleteEjercicio(id);
      setData((prev) => prev.filter((ej) => ej.id !== id));
    } catch (err) {
      console.error("❌ Error eliminando ejercicio:", err);
      setError(err.message || "Error al eliminar ejercicio");
    }
  };

  useEffect(() => {
    fetchEjercicios();
  }, []);

  return { 
    data, 
    loading, 
    error, 
    fetchEjercicios, 
    addEjercicio, 
    editEjercicio, 
    removeEjercicio 
  };
};
