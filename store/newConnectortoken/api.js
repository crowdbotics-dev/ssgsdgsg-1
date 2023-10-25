import axios from "axios"
import { CONNECTOR_NEW_CONNECTOR_TOKEN_TOKEN } from "react-native-dotenv"
const newConnectortoken = axios.create({
  baseURL: "https://cbdash-pr-5028.herokuapp.com/dashboard/app/1/connectors",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${CONNECTOR_NEW_CONNECTOR_TOKEN_TOKEN}`
  }
})
export const apiService = {}
