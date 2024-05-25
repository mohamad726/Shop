import { BASE_URL } from "../Const/url";

export const getData = async (category: string) => {
  const data = await fetch(`${BASE_URL}/products?category=${category}`);
  return data.json();
};

export const getSingleData = async (id: string) => {
  const data = await fetch(`${BASE_URL}/products/${id}`);
  return data.json();
};

export const getCategoriesData = async () => {
  const data = await fetch(`${BASE_URL}/categories`);
  return data.json();
};
