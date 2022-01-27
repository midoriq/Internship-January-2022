<template>
    <div class="container">
        <div class="content">
            <div class="text">
                <p>Welcome on this Weather Application!</p>
            </div>
            <div class="gitlink">
                <a
                    href="https://github.com/poneciak57/VueJs-Project"
                    target="_blank"
                    >Github repository</a
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer",
    data() {
        return {};
    },
};
</script>

<style scoped>
/*
#D6F8B8
#ACDEAA
#8FBBAF
#6B7B8E
*/

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Open Sans;
    font-size: 14px;
}

.container {
    background-color: #6b7b8e;
    padding: 20px 0;
    width: 100%;

    position: absolute;
    bottom: 0;
}

.content {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;

    margin: auto;

    width: 35%;
}

.gitlink a {
    text-decoration: none;
    color: #8fbbaf;
    transition: all 0.3s ease;
}

.gitlink a:hover {
    color: #d6f8b8;
}

.text {
    padding: 0 0 7px 0;
}
</style>
