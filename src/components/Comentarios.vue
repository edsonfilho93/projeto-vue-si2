<template>
    <div class="container">
        <h1>Comentários </h1>
        <hr/>
        <!-- Formulário -->
        <div >
            <Formulario v-on:emit-comentario="addComentario"></Formulario> 
        </div>

        <!-- listagem do Formulário -->
        <div v-for="(c, index) in comentarios" :key="index">
            <span>Autor: <strong>{{ c.nome | nomeFilter()}}</strong></span>
            <p>{{ c.comentario }}</p>
            <div>
                <a v-on:click.prevent="removerComentario(index)" href="#" title="Excluir">Excluir</a>
            </div>
            <hr/>
        </div>

    </div>
</template>

<script>
import Formulario  from "./Formulario"
export default {
    name: "Comentarios",
    components: {
        Formulario
    },
    
    data() {
        return {
            comentarios: []
        }
    },

    methods: {
        addComentario(comentario){
            this.comentarios.push(comentario);
        },

        removerComentario(index){
            this.comentarios.splice(index, 1);
        }
    },

    filters: {
        nomeFilter(nome){
            let nomeAux = nome;

            if(nome.trim() === ''){
                nomeAux = 'Anônimo';
            }

            return nomeAux
        }
    }
}
</script>

<style>

</style>