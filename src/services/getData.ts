import { BASE_URL } from "../Const/url";

export const getData = async (category: string) => {
  const data = await fetch(`${BASE_URL}/products?category=${category}`);
  return data.json();
};

export const getSingleData = async (id: string) => {
  const data = await fetch(`${BASE_URL}/products/1`);
  console.log(data.json());
  return data.json();
};
