import axios from "axios";

export async function QueryEvents() {
  try {
    const response = await axios.get("/api/events");
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des événements :", error);
    return null;
  }
}

export async function QueryEventsWithLimit(limit: number) {
  try {
    const response = await axios.get(`/api/events/limit/${limit}`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des événements :", error);
    return null;
  }
}