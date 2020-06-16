<template>
    <div class="form-group">
        <p>
            <input
                v-model="nomeEditora"
                type="text"
                placeholder="Editora"
                class="form-control"
            />
        </p>
        
        <button v-on:click="addEditora" type="submit" class="btn btn-dark">
            Cadastrar Editora
        </button>
    </div>
</template>

<script>
export default {
    name: "FormularioEditora",

    data() {
        return {
            nomeEditora: "",
        };
    },

    methods: {
        addEditora() {
            if (this.nomeEditora.length === 0) {
                return alert("O nome da editora é obrigatório!");
            }

            this.$emit("emit-editora", {
                nomeEditora: this.nomeEditora,
            });

            this.nomeEditora = "";
        },
    },
};
</script>

<style></style>
