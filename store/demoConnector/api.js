import axios from "axios"
import {
  CONNECTOR_DEMO_CONNECTOR_USERNAME,
  CONNECTOR_DEMO_CONNECTOR_PASSWORD
} from "react-native-dotenv"
const demoConnector = axios.create({
  baseURL: "https://test.com",
  auth: {
    username: CONNECTOR_DEMO_CONNECTOR_USERNAME,
    password: CONNECTOR_DEMO_CONNECTOR_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
