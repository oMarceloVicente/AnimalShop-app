import axiosInstance, { endpoints, fetcher } from "@/utils/axios";
import useSWR from "swr";

export interface Animal {
  name: string;
  specie: string;
  age: string;
  price: string;
  ownerEmail: string;
  image: string;
}

export function useAnimal() {
  return useSWR<Animal[]>(endpoints.animal.getAnimals, fetcher);
}

export async function getAnimalById(animalId: string) {
  const url = endpoints.animal.getAnimalById.replace("{id}", animalId);

  const res = await axiosInstance.get<Animal>(url);

  return res;
}

export function getAnimalBySpecie(specie: string) {
  return useSWR<Animal[]>(
    endpoints.animal.getAnimalBySpecie.replace("{specie}", specie),
    fetcher
  );
}
