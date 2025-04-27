import axios from "axios";

export const getProducts = async (limit, skip) => {
  return axios
    .get(`https://dummyjson.com/products/?limit=${limit}&skip=${skip}`)
    .then((res) => res.data)
    .catch((e) => console.log("Error:", e));
};

export const getProductById = async (id) => {
  return axios
    .get(`https://dummyjson.com/products/${id}`)
    .then((res) => res.data)
    .catch((e) => console.log("Error:", e));
};

