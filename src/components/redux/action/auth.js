import { AUTHENTICATE_USER } from "./types";
import axios from "axios";

const Authenticate = (userData) => {
  const [name, email, password] = userData;

  const res = axios.post("/signup", { ...userData });

  return {};
};
