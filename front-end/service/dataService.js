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
  async fetchUserBillboard(id) {
    try {
      const response = await http.dataApi.get(`/user_billboard/full/id/${id}`);
      console.log(response);
      return response.data[0];
    } catch (e) {
      console.error("Failed to fetch billboard - ", e);
      return false;
    }
  }
  async fetchScreenCanvasId(id) {
    try {
      const response = await http.dataApi.get(`/screen_canvas/id/${id}`);
      return response.data[0];
    } catch (e) {
      console.error("Failed to fetch canvas - ", e);
      return false;
    }
  }
  async fetchScreenCanvases() {
    try {
      const response = await http.dataApi.get("/screen_canvases");
      return response.data;
    } catch (e) {
      console.error("Failed to fetch canvases - ", e);
      return false;
    }
  }
  // CREATE

  // UPDATE
  // DELETE
}

export default new DataService();
