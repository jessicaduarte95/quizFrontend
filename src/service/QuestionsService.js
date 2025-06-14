import api from "./api";

export const getTotalLevel = async () => {
  const response = await api.get("/questions");
  return response.data;
};

export const getQuestionsLevel = async (level) => {
  const response = await api.get(`/questions/${level}`);
  return response.data;
};
