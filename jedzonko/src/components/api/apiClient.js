import axios from "axios";
import authHeader from './auth-header'
 const apiClient = axios.create({
  baseURL: `http://127.0.0.1:8000/` ,
  headers: authHeader()
});

export default apiClient;