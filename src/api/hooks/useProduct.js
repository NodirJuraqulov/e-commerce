import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "..";

export const useProduct = () => {
  const queryClient = useQueryClient();

  const getProduct = (params) =>
    useQuery({
      queryKey: ["product", params],
      queryFn: () => api.get("/products", { params }),
    });

  return { getProduct };
};
