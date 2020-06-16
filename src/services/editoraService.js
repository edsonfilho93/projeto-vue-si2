import apiClient from "../services/configService.js";

export default {
    getEditoras() {
        return apiClient.get("/editoras");
    },
    addEditora(editora) {
        return apiClient.post("/editoras", editora);
    },
};
