// 📌 Base URL de tu backend en Render
const BASE_URL = "https://gymboard-api.onrender.com/api/ejercicios";

// ✅ Obtener todos los ejercicios
export const getEjercicios = async () => {
  try {
    const response = await fetch(BASE_URL, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) throw new Error("No se pudieron obtener los ejercicios");

    const result = await response.json();
    return { data: result };
  } catch (error) {
    return Promise.reject(error);
  }
};

// ✅ Crear un ejercicio
export const createEjercicio = async (ejercicio) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ejercicio),
    });

    if (!response.ok) throw new Error("Error al crear el ejercicio");

    const result = await response.json();
    return { data: result };
  } catch (error) {
    return Promise.reject(error);
  }
};

// ✅ Obtener un ejercicio por ID
export const getEjercicio = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) throw new Error("Error al obtener el ejercicio");

    const result = await response.json();
    return { data: result };
  } catch (error) {
    return Promise.reject(error);
  }
};

// ✅ Actualizar un ejercicio
export const updateEjercicio = async (id, ejercicio) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ejercicio),
    });

    if (!response.ok) throw new Error("Error al actualizar el ejercicio");

    const result = await response.json();
    return { data: result };
  } catch (error) {
    return Promise.reject(error);
  }
};

// ✅ Eliminar un ejercicio
export const deleteEjercicio = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) throw new Error("Error al eliminar el ejercicio");

    return { data: { message: "Ejercicio eliminado exitosamente" } };
  } catch (error) {
    return Promise.reject(error);
  }
};
