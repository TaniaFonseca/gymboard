import { useState } from "react";

export function useLocalStorage(key, initialValue) {
  // Revisar si hay algo en localStorage
  const stored = localStorage.getItem(key);
  const [value, setValue] = useState(stored ? JSON.parse(stored) : initialValue);

  // Guardar y actualizar
  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  // Eliminar
  const removeStoredValue = () => {
    setValue(initialValue);
    localStorage.removeItem(key);
  };

  return [value, setStoredValue, removeStoredValue];
}
