export default function ExerciseForm({ onSubmit }) {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-white p-4 rounded shadow-md flex flex-col gap-2"
    >
      <input
        type="text"
        name="name"
        placeholder="Nombre del ejercicio"
        className="border p-2 rounded"
      />
      <textarea
        name="description"
        placeholder="Descripción"
        className="border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Guardar
      </button>
    </form>
  );
}
