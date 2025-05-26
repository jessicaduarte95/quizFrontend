import api from "./api";

export const getTotalLevel = async () => {
  const response = await api.get("/questions");
  return response.data;
};
