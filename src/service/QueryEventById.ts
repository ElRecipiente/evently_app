import axios from "axios";

export async function QueryEventById(id: string | Array<string> | undefined) {
  try {
    if (typeof id !== "string") {
      console.error("Erreur, l'id n'est pas une chaîne de caractère valide.")
      return null;
    }
    const response = await axios.get(`/api/events/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des événements :", error);
    return null;
  }
}