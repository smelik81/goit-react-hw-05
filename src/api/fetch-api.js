import axios from "axios";

axios.defaults.baseURL = "https://65c23f3af7e6ea59682af8d1.mockapi.io";

export const getProductsApi = async () => {
  const { data } = await axios.get("/payments");
  console.log(data);
  return data;
};
