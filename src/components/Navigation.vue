<template>
    <div class="header">
        <nav>
            <div class="branding">
                <h2><router-link to="/">WeatherApp</router-link></h2>
            </div>
            <ul class="navigation">
                <li>
                    <router-link class="link" to="/" active-link="active"
                        >Home</router-link
                    >
                </li>
                <li>
                    <router-link class="link" to="/cities" active-link="active"
                        >Cities</router-link
                    >
                </li>
                <li>
                    <router-link class="link" to="/archive" active-link="active"
                        >Archive</router-link
                    >
                </li>
                <li>
                    <router-link class="link" to="/about" active-link="active"
                        >About</router-link
                    >
                </li>
                <li>
                    <img
                        src="../assets/menu.svg"
                        alt="menu"
                        class="ham_menu"
                        v-on:click="this.responsive = !this.responsive"
                        v-if="!this.responsive"
                    />
                    <img
                        src="../assets/close.svg"
                        alt="close"
                        class="ham_menu"
                        v-on:click="this.responsive = !this.responsive"
                        v-else
                    />
                </li>
            </ul>
        </nav>
        <div class="respon ham_menu" v-if="responsive">
            <ul>
                <li>
                    <router-link class="link" to="/">Home</router-link>
                </li>
                <li>
                    <router-link class="link" to="/cities">Cities</router-link>
                </li>
                <li>
                    <router-link class="link" to="/archive"
                        >Archive</router-link
                    >
                </li>
                <li>
                    <router-link class="link" to="/about">About</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "navigation",
    data() {
        return {
            responsive: false,
        };
    },
};
</script>

<style scoped>
.header {
    background-color: #6b7b8e;
    overflow: hidden;
    padding: 20px 0;
}
img {
    width: 40px;
}

a {
    text-decoration: none;
    color: white;
}

ul li {
    list-style-type: none;
}

ul li a {
    transition: 0.4s ease all;
}

ul li a:hover {
    color: #8aae92;
}

nav {
    display: flex;
    width: 80%;
    margin: auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.navigation {
    display: flex;
    flex-direction: row;
    width: 40%;
    justify-content: space-between;
    align-items: center;
}

.router-link-active {
    color: #8fbbaf;
}

.ham_menu {
    display: none;
    cursor: pointer;
}

.respon ul {
    margin-left: 20px;
    margin-top: 10px;
}

.respon ul li {
    padding: 15px 0;
    transition: 0.4s ease all;
}

.respon ul li:hover {
    background-color: #8fbbaf;
    color: white;
}

h2 .router-link-active {
    color: white;
}

@media screen and (max-width: 900px) {
    .navigation {
        width: 50%;
    }
}

@media screen and (max-width: 700px) {
    .navigation {
        width: 60%;
    }
}

@media screen and (max-width: 630px) {
    .navigation li a {
        display: none;
    }
    .ham_menu {
        display: block;
    }
}
</style>
