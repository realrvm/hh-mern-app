import axios from "axios";
import { IS_DEV } from "../lib/constants";

const baseURL = IS_DEV
  ? "http://localhost:5000/api"
  : "http://localhost:5000/api";

export const $api = axios.create({
  baseURL,
});
