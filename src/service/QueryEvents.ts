import axios from "axios";

export async function QueryEvents () {
  axios({
    method: "get",
    url: `/api/events`,
  })
    .then((function (response) {
      return response.data
    }))
}