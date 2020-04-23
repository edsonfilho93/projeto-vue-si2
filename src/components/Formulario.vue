<template>
    <div class="form-group">
        <p>
            <input v-model="nome" type="text" placeholder="Autor" class="form-control">
        </p>
        <p>
            <textarea v-model="comentario" placeholder="Comentario" class="form-control"></textarea>
        </p>
        <button v-on:click="addComentario" type="submit" class="btn btn-dark"> Comentar </button>

    </div>
    
</template>

<script>
export default {
    name: "Formulario",
    data(){
        return{
            nome: '',
            comentario: ''
        }
    },
    methods: {
        addComentario(){
            // apenas o campo comentario pode ser vazio, pois pode existir um comentário anônimo
            if(this.comentario.trim() === ''){
                return alert("Os dois campos são obrigatórios");
            }
            
            this.$emit('emit-comentario', {nome: this.nome, comentario: this.comentario});
            //limpa os dados do formulario após o envio
            this.nome = ''
            this.comentario = ''
        }
    }
}
</script>

<style >

</style>