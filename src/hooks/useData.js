import api from "../api";

export default function useData() {

  return {
    getData: async () => {
      try {
        const res = await api.get("restorants");
        return res.data;
      } catch (error) {
        alert(error.message);
        return [];
      }
    },
    getDetail: async (id) => {
      try {
        const res = await api.get(`restorants/${id}`);
        return res.data;
      } catch (error) {
        alert(error.message);
      }
    },
    sendFeedback: async (id, params) => {
      try {
        const res = await api.post(`restorants/${id}`, params);
        return res.data;
      } catch (error) {
        alert(error.message);
      }
    } 
  };
}

