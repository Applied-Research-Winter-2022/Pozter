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
      return response.data[0];
    } catch (e) {
      console.error("Failed to fetch billboard - ", e);
      return false;
    }
  }
  async fetchScreenCanvasByBillboardId(id) {
    try {
      const response = await http.dataApi.get(`/screen_canvas/id/billboard/${id}`);
      return response.data;
    } catch (e) {
      console.error("Failed to fetch canvases - ", e);
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
  async fetchSocialMediaPosts() {
    try {
      const response = await http.dataApi.get("/social_media_posts");
      return response.data;
    } catch (e) {
      console.error("Failed to fetch canvases - ", e);
      return false;
    }
  }
  // CREATE
  async createUserScreen(params) {
    try {
      const response = await http.dataApi.request({
        method: "post",
        url: "/user_screen/create",
        data: params,
      });
      return response;
    } catch (e) {
      console.error("Failed to create user screen - ", e);
      return false;
    }
  }
  async createUserBillboard(params) {
    try {
      const response = await http.dataApi.request({
        method: "post",
        url: "/user_billboard/create",
        data: params,
      });
      return response;
    } catch (e) {
      console.error("Failed to create user billboard - ", e);
      return false;
    }
  }
  async createSocialMediaContent(params) {
    try {
      const response = await http.dataApi.request({
        method: "post",
        url: "/social_media_content/create",
        data: params,
      });
      return response;
    } catch (e) {
      console.error("Failed to create user billboard - ", e);
      return false;
    }
  }
  // UPDATE
  // DELETE
}

export default new DataService();
