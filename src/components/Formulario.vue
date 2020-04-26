<template>
    <div class="form-group">
        <p>
            <input v-model="titulo" type="text" placeholder="Título do livro" class="form-control" >
        </p>
        <p>
            <input v-model="editora" type="text" placeholder="Editora" class="form-control">
        </p>
        <p>
            <input v-model="numPaginas" type="number" placeholder="Número de páginas" class="form-control">
        </p>

        <button v-on:click="addLivro" type="submit" class="btn btn-dark"> Cadastrar livro </button>
    </div>
    
</template>

<script>
export default {
    name: "Formulario",

    data(){
        return{
            titulo: '',
            editora: '',
            numPaginas: ''
        }
    },

    methods: {
       
        addLivro(){
            
            if(this.titulo.length === 0 || this.editora.length === 0 || this.numPaginas.length === 0){
                return alert('Todos os camos são obrigatórios!');
            } 

            if(Number.parseInt(this.numPaginas) <= 0){
                return alert('O número de páginas tem que ser maior que 0')
            }
     
            this.$emit('emit-livro', {
                titulo: this.titulo, 
                editora: this.editora,
                numPaginas: this.numPaginas});

            //limpa os dados do formulario após o envio
            this.titulo = ''
            this.editora = ''
            this.numPaginas = ''
        }
    }
}
</script>

<style ></style>