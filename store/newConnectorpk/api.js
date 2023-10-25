import axios from "axios"
import { CONNECTOR_NEW_CONNECTOR_PK_SECRET } from "react-native-dotenv"
const newConnectorpk = axios.create({
  baseURL: "https://cbdash-pr-5028.herokuapp.com/dashboard/app/1/connectors",
  params: { private_key: CONNECTOR_NEW_CONNECTOR_PK_SECRET },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
