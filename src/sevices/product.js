import axios from "axios";

export const getProductById = async (id) => {
  return axios
    .get(`https://dummyjson.com/products/${id}`)
    .then((res) => res.data)
    .catch((e) => console.log("Error:", e));
};

export const searchProducts = async (text, limit, skip) => {
  return axios
    .get(
      `https://dummyjson.com/products/search?q=${text}&limit=${limit}&skip=${skip}`
    )
    .then((res) => res.data)
    .catch((e) => console.log("Error:", e));
};
