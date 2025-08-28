export default function ExerciseForm({ onSubmit, formData, setFormData, editing }) {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-white p-4 rounded shadow-md flex flex-col gap-2"
    >
      <input
        type="text"
        name="name"
        placeholder="Nombre del ejercicio"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="border p-2 rounded"
        required
      />
      <textarea
        name="description"
        placeholder="Descripción"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        className="border p-2 rounded"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {editing ? "Actualizar" : "Guardar"}
      </button>
    </form>
  );
}

