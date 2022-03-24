import http from "../service/api.factory";

class DataService {
  // FETCH
  async fetchBillboardId(id) {
    try {
      const response = await http.dataApi.get(`/billboard/id/${id}`);
      return response.data[0];
    } catch (e) {
      console.error("Failed to fetch billboard - ", e);
      return false;
    }
  }
  async fetchBillboards() {
    try {
      const response = await http.dataApi.get("/billboards");
      return response.data;
    } catch (e) {
      console.error("Failed to fetch billboards - ", e);
      return false;
    }
  }
  // CREATE
  // UPDATE
  // DELETE
}

export default new DataService();
