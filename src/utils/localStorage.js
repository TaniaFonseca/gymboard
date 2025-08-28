
// Guardar datos en localStorage
export function saveToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// Obtener datos de localStorage
export function getFromLocalStorage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}
