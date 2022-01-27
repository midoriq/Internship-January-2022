<template>
    <div class="container">
        <div id="blur">
            <div class="cities">
                <div class="content">
                    <h2>List of cities</h2>
                    <router-link to="/add">
                        <button type="button" class="add">
                            <span class="button_text">Add City</span>
                            <span class="button_icon"
                                ><img src="../assets/add.svg" alt=""
                            /></span>
                        </button>
                    </router-link>
                </div>

                <ul>
                    <li
                        v-for="item in cities"
                        :key="item.Name"
                        class="cities_name"
                        v-on:click="ShowDetails"
                        @click="this.cityName = item.Name"
                    >
                        {{ item.Name }}
                    </li>
                </ul>
            </div>
        </div>
        <div class="cities_details" v-if="showDetail">
            <CityDetails :cityData="cityName" />
            <img
                src="../assets/close.svg"
                alt="closes"
                class="off"
                v-on:click="ShowDetails"
            />
        </div>
    </div>
</template>

<script>
import CityDetails from "../components/CityDetails.vue";

export default {
    name: "cities",
    data() {
        return {
            cities: [],
            showDetail: false,
            cityName: "Warszawa",
        };
    },
    components: {
        CityDetails,
    },
    methods: {
        ShowDetails() {
            var blur = document.getElementById("blur");
            if (this.showDetail) {
                this.showDetail = false;
                blur.classList.remove("active");
            } else {
                this.showDetail = true;
                blur.classList.toggle("active");
            }
        },
    },
    mounted() {
        fetch("http://34.116.152.0/Cities")
            .then((res) => res.json())
            .then((data) => (this.cities = data.Data))
            .catch((err) => console.log(err.message));
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cities {
    width: 60%;
    margin: 50px auto 0 auto;
}

ul {
    padding: 20px 0 0 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 60vh;
}

ul li {
    font-family: Open Sans;
    list-style-type: none;

    margin: 10px 0;
    width: 12%;
    cursor: pointer;

    transition: ease all 0.4s;
}

ul li:hover {
    color: #acdeaa;
}

.content {
    display: flex;
    align-items: center;
}

h2 {
    font-family: Montserrat;
    font-weight: 700;
    color: #8aae92;
    font-size: 40px;

    margin-right: 40px;
}

a {
    text-decoration: none;
}

.add {
    display: inline-flex;
    height: 30px;
    padding: 0;
    background: #8fbbaf;
    border: none;
    outline: none;
    border-radius: 5px;
    overflow: hidden;
    font-family: Open Sans;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
}

.add:hover {
    background: #5e8077;
}

.button_text,
.button_icon {
    display: inline-flex;
    align-items: center;
    color: #fff;
    height: 100%;
}

.button_text {
    padding: 0 20px;
}

.button_icon {
    background: rgba(0, 0, 0, 0.08);
    padding: 0 10px;
}

.button_icon img {
    height: 20px;
}

#blur.active {
    filter: blur(2px);
    pointer-events: none;
}
#blur.off {
    filter: none;
    pointer-events: visible;
}

.cities_details {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;

    filter: blur(0px);
    pointer-events: visible;
}
.off {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 30px;
    right: 0px;

    height: 25px;

    cursor: pointer;
}
</style>
