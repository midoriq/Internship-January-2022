<template>
    <div class="header">
        <nav>
            <div class="branding">
                <h2>WeatherApp</h2>
            </div>
            <ul class="navigation">
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
        </nav>
    </div>
</template>

<script>
export default {
    name: "navigation",
    data() {
        return {};
    },
};
</script>

<style scoped>
.header {
    background-color: #6b7b8e;
    opacity: 0.8;
    width: 100%;
    transition: 0.5s ease all;
    color: white;
}

nav {
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: 0.5s ease all;
    width: 90%;
    margin: 0 auto;
}

ul,
.link {
    font-weight: 500;
    color: white;
    list-style: none;
    text-decoration: none;
}

li {
    text-transform: uppercase;
    padding: 16px;
    margin-left: 16px;
}

.link {
    font-size: 14px;
    transition: 0.5s ease all;
    padding-bottom: 4px;
    border-bottom: 1px solid transparent;
}

.link:hover {
    color: #d6f8b8;
    border-color: #d6f8b8;
}

.branding {
    display: flex;
    align-items: center;
    margin-right: 20%;
    font-weight: 400;
}

.branding img {
    width: 50px;
    transition: 0.5s ease all;
}

.navigation {
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>
