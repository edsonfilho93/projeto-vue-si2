<template>
    <div class="container">
        <h1>Cadastro de Livros</h1>
        <hr/>
        <!-- Formulário -->
        <div>
            <Formulario v-on:emit-livro="addLivro"></Formulario> 
        </div>
        <!-- Listagem Livros -->
        <p v-if="livros.length <= 0"> Não há livros cadastrados</p>

        <div v-for="(l, index) in livros" :key="index">
            <p> 
                <span> Titulo do Livro: <strong>{{l.titulo}}</strong> </span>
                <span> Editora: {{ l.editora }} </span> 
                <span> Número de Páginas: {{l.numPaginas}} </span> 
            </p>
        
            <div>
                <button v-on:click.prevent="removeLivro(index)" type="button" class="btn btn-danger btn-sm" title="Excluir">Excluir</button>
                <hr/>
            </div>
        </div>
    </div>
</template>

<script>
import Formulario from "./Formulario"

export default {
    name: "Livros",

    components: {
        Formulario
    },

    data() {
        return {
            livros: []
        }
    },

    methods: {
        addLivro(livro) {
            this.livros.push(livro);
        },
        removeLivro(index) {
            this.livros.splice(index, 1);
        }
    }
}
</script>

<style >
p span {
    display: block;
}

</style>