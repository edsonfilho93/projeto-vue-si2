<template>
    <div class="form-group">
        <p>
            <input
                v-model="titulo"
                type="text"
                placeholder="Título do livro"
                class="form-control"
            />
        </p>
        <p>
            <input
                v-model="codEditora"
                type="text"
                placeholder="Editora"
                class="form-control"
            />
        </p>
        <p>
            <input
                v-model="qtdPaginas"
                type="number"
                placeholder="Número de páginas"
                class="form-control"
            />
        </p>

        <button v-on:click="addLivro" type="submit" class="btn btn-dark">
            Cadastrar livro
        </button>
    </div>
</template>

<script>
export default {
    name: "Formulario",

    data() {
        return {
            titulo: "",
            codEditora: "",
            qtdPaginas: "",
        };
    },

    methods: {
        addLivro() {
            if ( this.titulo.length === 0 || this.codEditora.length === 0 || this.qtdPaginas.length === 0 ) {
                return alert("Todos os camos são obrigatórios!");
            }

            if (Number.parseInt(this.qtdPaginas) <= 0) {
                return alert("O número de páginas tem que ser maior que 0");
            }

            this.$emit("emit-livro", {
                titulo: this.titulo,
                codEditora: this.codEditora,
                qtdPaginas: this.qtdPaginas,
            });

            //limpa os dados do formulario após o envio
            this.titulo = "";
            this.codEditora = "";
            this.qtdPaginas = "";
        },
    },
};
</script>

<style></style>
