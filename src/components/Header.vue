<template>
    <div class="Header">
        <nav class="navbar navbar-dark bg-dark">
            <a class="navbar-brand">
                <img
                    src="https://anniebello.com.br/wp-content/uploads/2018/11/icone-livros-ebooks.png"
                    width="30"
                    height="30"
                    class="d-inline-block align-top"
                    alt=""
                />
                {{ msg }}
            </a>
        </nav>
    </div>
</template>


<script>
export default {
    name: "Header",

    data() {
        return {
            msg: "Olá, seja Bem Vindo!",
        };
    },
};
</script>

<style>
nav {
    margin-bottom: 20px;
}
</style>
