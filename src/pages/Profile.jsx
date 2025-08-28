import ProfileForm from "../components/ProfileForm";

export default function Profile() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Perfil guardado ✅");
  };

  return (
    <div className="mt-6">
      <ProfileForm onSubmit={handleSubmit} />
    </div>
  );
}
