import axios from "axios";

export async function QueryEventById (id: string) {
  try {
    const response = await axios.get(`/api/events/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des événements :", error);
    return null;
  }
}