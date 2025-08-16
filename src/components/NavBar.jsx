import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <Link to="/">Inicio</Link>
        <Link to="/Mis rutinas">Mis rutina</Link>
        <Link to="/Rutinas propuestas">Rutinas propuestas</Link>

        <Link to="/inicio">Crear rutina</Link>
      </nav>
    </div>
  );
};
