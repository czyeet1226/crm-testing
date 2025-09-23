import api from "./axios";


export function sendData(data) {
  console.log(data);
  return api.post("/user", data);
}
