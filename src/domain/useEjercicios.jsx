import { useEffect, useState } from "react";
import { getEjercicios } from "../api/ejercicios";

export const useExercises = () => {
  // creacion de estados de la solicitud
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  //llamdo a mi funcion de API

  const fetchEjercicios = async () => {
    setLoading(true);
    setError("");
     console.log("👉 Llamando a getEjercicios...");

    try {
      const response = await getEjercicios();
      console.log("Respuesta API:", response);
      setData(response);
    } catch (err) {
      setError(err.message || "Error al obtener ejercicios");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {s
   fetchEjercicios();
  }, []);

  return { data, loading, error, fetchEjercicios };
};