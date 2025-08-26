import ProfileForm from "../components/ProfileForm";

export default function Profile() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Perfil guardado ✅");
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Perfil</h2>
      <ProfileForm onSubmit={handleSubmit} />
    </div>
  );
}
