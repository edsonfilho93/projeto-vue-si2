<template>
    <div class="container">
        <h1>Cadastro de Livros</h1>
        <hr />
        <!-- Formulário -->
        <div>
            <Formulario v-on:emit-livro="addLivro"></Formulario>
        </div>
        <!-- Listagem Livros -->
        <p v-if="livros.length <= 0">Não há livros cadastrados</p>

        <div v-for="(livro, index) in livros" :key="index">
            <p>
                <span>
                    Titulo do Livro: <strong>{{ livro.titulo }}</strong>
                </span>
                <span> Editora: {{ livro.codEditora }} </span>
                <span> Número de Páginas: {{ livro.qtdPaginas }} </span>
            </p>

            <div>
                <button
                    v-on:click.prevent="removeLivro(index)"
                    type="button"
                    class="btn btn-danger btn-sm"
                    title="Excluir"
                >
                    Excluir
                </button>
                <hr />
            </div>
        </div>
    </div>
</template>

<script>
import Formulario from "./Formulario";
import livroService from "@/services/livroService.js";

export default {
    name: "Livros",
    components: {
        Formulario
    },
    data() {
        return {
            livros: []
        };
    },
    created() {
        this.forceRender();
    },
    methods: {
        addLivro(livro) {
            livroService.addLivro(livro)
                .then((response) => {
                    console.log(response.status);
                    this.forceRender();
                })
                .catch((error) => {
                    console.log("Ocorreu um erro: " + error.response);
                });

            this.created();
        },

        forceRender(){
             livroService
            .getLivros()
            .then((response) => {
                this.livros = response.data;
                console.log(response.status);
            })
            .catch((error) => {
                console.log("Ocorreu um erro: " + error.response);
            });
        },

        removeLivro(index) {
            this.livros.splice(index, 1);
        },
    }
};
</script>

<style>
p span {
    display: block;
}
</style>
