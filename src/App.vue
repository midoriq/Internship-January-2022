<template>
    <Navigation />
    <router-view />
    <Footer />
</template>

<script>
import Footer from "./components/Footer.vue";
import Navigation from "./components/Navigation.vue";

export default {
    name: "App",
    components: {
        Navigation,
        Footer,
    },
};
</script>

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    font-family: Open Sans;
}

#app {
    min-height: 100vh;
    position: relative;
}

.container {
    padding-bottom: 85px;
}
</style>
