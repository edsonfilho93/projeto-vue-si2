<template>
    <div>
        <Header />
        <Livro :key="componentKey" />
    </div>
</template>

<script>
import Header from "./components/Header";
import Livro from "./components/Livros";

export default {
    name: "App",
    components: {
        Header,
        Livro,
    },
};
</script>

<style></style>
