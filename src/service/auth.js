import http from "./config";
const auth = {
  sign_up: (data) => http.post("/auth/register", data),
  sign_in: (data) => http.post("/auth/login", data),
};
export default auth;
