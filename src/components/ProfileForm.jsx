export default function ProfileForm({ onSubmit }) {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-white p-4 rounded shadow-md flex flex-col gap-2"
    >
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        className="border p-2 rounded"
      />
      <input
        type="number"
        name="age"
        placeholder="Edad"
        className="border p-2 rounded"
      />
        <input
        type="number"
        name="peso"
        placeholder="Peso"
        className="border p-2 rounded"
      />
      <input
        type="number"
        name="estatura"
        placeholder="Estatura"
        className="border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
      >
        Guardar
      </button>
    </form>
  );
}
