import api from "./api";

export const getOptionsLevel = async (level) => {
  const response = await api.get(`/options/${level}`);
  return response.data;
};
