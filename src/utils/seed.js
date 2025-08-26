// src/utils/seed.js
import { saveToLocalStorage, getFromLocalStorage } from "./localStorage";

const DATA_KEY = "rutinas";

const defaultData = [
  {
    id: 1,
    name: "Rutina de Piernas",
    exercises: ["Sentadillas", "Peso muerto", "Zancadas"]
  },
  {
    id: 2,
    name: "Rutina de Espalda",
    exercises: ["Dominadas", "Remo con barra", "Peso muerto"]
  }
];

// Función para inicializar los datos
export function seedData() {
  const existingData = getFromLocalStorage(DATA_KEY);
  if (!existingData) {
    saveToLocalStorage(DATA_KEY, defaultData);
  }
}
