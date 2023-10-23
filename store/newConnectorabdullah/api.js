import axios from "axios"
import {
  CONNECTOR_NEW_CONNECTOR_ABDULLAH_USERNAME,
  CONNECTOR_NEW_CONNECTOR_ABDULLAH_PASSWORD
} from "react-native-dotenv"
const newConnectorabdullah = axios.create({
  baseURL: "https://cbdash-pr-5028.herokuapp.com/dashboard/app/1/connectors",
  auth: {
    username: CONNECTOR_NEW_CONNECTOR_ABDULLAH_USERNAME,
    password: CONNECTOR_NEW_CONNECTOR_ABDULLAH_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
