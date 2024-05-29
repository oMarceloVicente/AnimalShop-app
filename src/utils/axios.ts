import { HOST_API } from "@/config-global";
import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: HOST_API,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axiosInstance;

export const fetcher = async (args: string | [string, AxiosRequestConfig]) => {
  const [url, config] = Array.isArray(args) ? args : [args];
  const res = await axiosInstance.get(url, {
    ...config,
  });

  return res.data;
};

export const endpoints = {
  user: {
    getUser: "user",
  },
  login: "login",
  pawstore: {
    home: "pawstore/home",
    about: "pawstore/about",
    contacts: "pawstore/contacts",
    shop: "pawstore/shop",
  },
  animal: {
    getAnimals: "animal",
    createAnimal: "animal",
    getAnimalById: "animal/{id}",
    getAnimalBySpecie: "animal/specie/{specie}",
    updateAnimal: "animal/{id}",
    deleteAnimal: "animal/{id}",
  },
};
