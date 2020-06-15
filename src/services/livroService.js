import apiClient from "../services/configService.js";

export default {
    getLivros() {
        return apiClient.get();
    },
    addLivro(livro) {
        return apiClient.post("/", livro);
    },
};
