import { AUTHENTICATE_USER } from "./types";
import axios from "axios";

const Authenticate = (userData) => {
  const [name, email, password] = userData;

  const res = axios.post("/signup", { ...userData });

  //yaha pe ek response ayega jise hum ye decide karenge ki user authenticated hua ya haniwase tho hum cookie send karte hai tho iskem kaise hoga
  return {};
};
