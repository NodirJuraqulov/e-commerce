import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "..";

export const useProduct = () => {
  const queryClient = useQueryClient();

  const getProduct = (params) =>
    useQuery({
      queryKey: ["product", params],
      queryFn: () => api.get("/products", { params }),
    });

  const getProductById = (id) =>
    useQuery({
      queryKey: ["product", id],
      queryFn: () => api.get(`/products/${id}`).then((res) => res.data),
      enabled: !!id, // ID bo‘sh bo‘lmasa ishlaydi
    });

  const getProductByCategory = (category) =>
    useQuery({
      queryKey: ["products-by-category", category],
      queryFn: () =>
        api.get(`/products/category/${category}`).then((res) => res.data),
      enabled: !!category,
    });

  return { getProduct, getProductById, getProductByCategory };
};
