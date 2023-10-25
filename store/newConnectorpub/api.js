import axios from "axios"
const newConnectorpub = axios.create({
  baseURL: "https://cbdash-pr-5028.herokuapp.com/dashboard/app/1/connectors",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
