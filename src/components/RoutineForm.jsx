export default function RoutineForm({ onSubmit }) {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-white p-4 rounded shadow-md flex flex-col gap-2"
    >
      <input
        type="text"
        name="title"
        placeholder="Nombre de la rutina"
        className="border p-2 rounded"
      />
      <textarea
        name="description"
        placeholder="Descripción"
        className="border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Guardar
      </button>
    </form>
  );
}
