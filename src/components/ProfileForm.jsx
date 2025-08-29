import { useLocalStorage } from "../hooks/useLocalStorage";
import { useState, useEffect } from "react";

export default function Profile() {
  const [profile, setProfile, removeProfile] = useLocalStorage("profile", null);
  const [editing, setEditing] = useState(!profile); 

  const [formData, setFormData] = useState({
    nombre: "",
    edad: "",
    estatura: "",
    peso: "",
    bio: "",
  });

  useEffect(() => {
    if (profile) {
      setFormData(profile);
    }
  }, [profile]);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile(formData);
    setEditing(false); // cambia a tarjeta
    alert("Perfil guardado ✅");
  };


  const handleDelete = () => {
    removeProfile();
    setFormData({ nombre: "", edad: "", estatura: "", peso: "", bio: "" });
    setEditing(true); // vuelve al formulario vacío
    alert("Perfil eliminado ❌");
  };

  if (editing) {
    return (
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded shadow-md flex flex-col gap-2 max-w-sm mx-auto"
      >
        <h2 className="text-xl font-bold mb-2">Editar Perfil</h2>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Nombre"
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="edad"
          value={formData.edad}
          onChange={handleChange}
          placeholder="Edad"
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="estatura"
          value={formData.estatura}
          onChange={handleChange}
          placeholder="Estatura (cm)"
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="peso"
          value={formData.peso}
          onChange={handleChange}
          placeholder="Peso (kg)"
          className="border p-2 rounded"
        />
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          placeholder="Sobre mí"
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


  return (
    <div className="bg-white p-4 rounded shadow-md max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-2">Mi Perfil</h2>
      <p><strong>Nombre:</strong> {profile.nombre}</p>
      <p><strong>Edad:</strong> {profile.edad}</p>
      <p><strong>Estatura:</strong> {profile.estatura} cm</p>
      <p><strong>Peso:</strong> {profile.peso} kg</p>
      <p><strong>Sobre mí:</strong> {profile.bio}</p>

      <div className="flex gap-2 mt-3">
        <button
          onClick={() => setEditing(true)}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          Editar
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
