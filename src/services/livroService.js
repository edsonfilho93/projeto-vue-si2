import apiClient from "../services/configService.js";

export default {
    getLivros() {
        return apiClient.get("/livros");
    },
    addLivro(livro) {
        return apiClient.post("/livros", livro);
    },
};
