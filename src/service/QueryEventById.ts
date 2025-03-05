import axios from "axios";

export async function QueryEventById (id: string) {
  axios({
    method: "get",
    url: `/api/events/${id}`,
  })
    .then((function (response) {
      return response.data
    }))
}