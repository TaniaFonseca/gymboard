
export function seedData() {
  const KEY = "rutinas";
  if (!localStorage.getItem(KEY)) {
    const seed = []; // ya no hay rutinas fijas
    localStorage.setItem(KEY, JSON.stringify(seed));
  }
}
