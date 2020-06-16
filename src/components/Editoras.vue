<template>
    <div div class="container"  >
        <h1>Cadastro de Editora</h1>
        <hr />
        <!-- Formulário -->
        <div>
            <FormularioEditora v-on:emit-editora="addEditora"></FormularioEditora>
        </div>
        <!-- Listagem Editoras -->
        <p v-if="editoras.length <= 0">Não há editoras cadastrados</p>

        <div v-for="(editora, index) in editoras" :key="index">
            <p>
                <span> Editora: <strong>{{ editora.nomeEditora }}</strong> </span>
            </p>

             <p>
                <span> Código da Editora: <strong>{{ editora.id }}</strong> </span>
            </p>

             <hr />
        </div>
    </div>
</template>

<script>
import FormularioEditora from "@/components/FormularioEditora";
import editoraService from "@/services/editoraService.js";

export default {
    name: "Editoras",
    components: {
        FormularioEditora
    },
    data() {
        return {
            editoras: []
        };
    },
    created() {
        this.forceRender();
    },
    methods: {
        addEditora(editora) {
            editoraService.addEditora(editora)
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
             editoraService
            .getEditoras()
            .then((response) => {
                this.editoras = response.data;
                console.log(response.status);
            })
            .catch((error) => {
                console.log("Ocorreu um erro: " + error.response);
            });
        },
    }
};
</script>

<style>

</style>
