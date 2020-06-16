<template>
    <div>
        <Header />
        <div class="box">
            <Livro />
            <Editora />
        </div>
    </div>
</template>

<script>
import Header from "./components/Header";
import Livro from "./components/Livros";
import Editora from "./components/Editoras";

export default {
    name: "App",
    components: {
        Header,
        Editora,
        Livro,
    },
};
</script>

<style>
.box {
    display: flex;
    padding-left: 5%;
    padding-right: 5%;
}
</style>
