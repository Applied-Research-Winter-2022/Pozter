import http from "../service/api.factory";

class DataService {
  // FETCH
  async fetchBillboardId(id) {
    try {
      const response = await http.dataApi.get(`/billboard/id/?id=${id}`);
      return response.data.rows[0];
    } catch (e) {
      console.error("Failed to fetch billboard - ", e);
      return false;
    }
  }
  async fetchBillboards() {
    try {
      const response = await http.dataApi.get("/billboards");
      console.log(response.data.rows);
      return response.data.rows;
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
