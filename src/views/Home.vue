<template>
    <div class="container">
        <div class="home">
            <div class="map">
                <img src="../assets/mapa_polski.png" alt="" />
                <div
                    class="All warszawa"
                    @click="this.cityName = 'Warszawa'"
                    v-on:click="ShowDetails"
                >
                    <div class="cityMark"></div>
                    <div class="show">Warszawa</div>
                </div>
                <div
                    class="All radom"
                    @click="this.cityName = 'Radom'"
                    v-on:click="ShowDetails"
                >
                    <div class="cityMark"></div>
                    <div class="show">Radom</div>
                </div>
                <div
                    class="All bialystok"
                    @click="this.cityName = 'Białystok'"
                    v-on:click="ShowDetails"
                >
                    <div class="cityMark"></div>
                    <div class="show">Białystok</div>
                </div>
                <div
                    class="All gdansk"
                    @click="this.cityName = 'Gdańsk'"
                    v-on:click="ShowDetails"
                >
                    <div class="cityMark"></div>
                    <div class="show">Gdańsk</div>
                </div>
                <div
                    class="All szczecin"
                    @click="this.cityName = 'Szczecin'"
                    v-on:click="ShowDetails"
                >
                    <div class="cityMark"></div>
                    <div class="show">Szczecin</div>
                </div>
                <div
                    class="All bydgoszcz"
                    @click="this.cityName = 'Bydgoszcz'"
                    v-on:click="ShowDetails"
                >
                    <div class="cityMark"></div>
                    <div class="show">Bydgoszcz</div>
                </div>
                <div
                    class="All wroclaw"
                    @click="this.cityName = 'Wrocław'"
                    v-on:click="ShowDetails"
                >
                    <div class="cityMark"></div>
                    <div class="show">Wrocław</div>
                </div>
                <div
                    class="All krakow"
                    @click="this.cityName = 'Kraków'"
                    v-on:click="ShowDetails"
                >
                    <div class="cityMark"></div>
                    <div class="show">Kraków</div>
                </div>
            </div>
            <div class="text">
                <div class="first" v-if="!showDetail">
                    <h2>Welcome!</h2>
                    <p>
                        You can see current temperature in biggest polish cities
                        on map. If you want to get further details click on city
                        name on map.
                    </p>
                </div>
                <div class="first" v-else>
                    <CityDetails :cityData="cityName" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CityDetails from "../components/CityDetails.vue";

export default {
    name: "home",
    data() {
        return {
            cityName: "Warszawa",
            showDetail: false,
        };
    },
    components: {
        CityDetails,
    },
    methods: {
        ShowDetails() {
            this.showDetail = true;
        },
    },
};
</script>

<style scoped>
.container {
    padding: 50px 0 150px 0;
    background-color: #8aae92;
}

.home {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 90%;
    margin: auto;
}

.text {
    width: 30%;
}

.text h2 {
    font-family: Montserrat;
    font-weight: 700;
    color: #4b5c4f;
    font-size: 50px;

    margin-bottom: 10px;
}

.map {
    position: relative;
}

.map img {
    width: 500px;
}

.All {
    position: absolute;
    transform: translate(-50%, -50%);

    cursor: pointer;
}

.cityMark {
    width: 4px;
    height: 4px;
    background-color: red;
    border-radius: 50%;
}

.show {
    font-size: 13px;
    position: absolute;
    left: 10px;
    top: -5px;
}

.cities_details {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
}
.off {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 30px;
    right: 0px;

    height: 25px;

    cursor: pointer;
}

.details {
    padding: 40px 30px;
    background-color: #8aae92;
}

.details h1 {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 30px;
    margin: 0 30px 15px 0;
}

.details td {
    padding: 8px 20px;
}

@media screen and (max-width: 900px) {
    .map img {
        width: 400px;
    }
    .container {
        padding: 50px 0 160px 0;
    }
}

@media screen and (max-width: 815px) {
    .map img {
        width: 300px;
    }
    .container {
        padding: 70px 0 200px 0;
    }
    .text h2 {
        font-size: 35px;
    }
    .text p {
        font-size: 14px;
    }
}

@media screen and (max-width: 650px) {
    .map img {
        width: 400px;
    }
    .home {
        flex-direction: column;
    }
    .container {
        padding: 30px 0 160px 0;
    }
    .text {
        text-align: center;
        padding-top: 20px;
        width: 50%;
    }
}

@media screen and (max-width: 450px) {
    .map img {
        width: 300px;
    }
    .text h2 {
        font-size: 25px;
    }
    .text p {
        font-size: 15apx;
    }

    .show {
        font-size: 10px;
    }
}

/*---Cities on map--- */
.warszawa {
    top: 43%;
    right: 30%;
}

.radom {
    top: 57%;
    right: 32%;
}

.bialystok {
    top: 30%;
    right: 12%;
}

.gdansk {
    top: 11.5%;
    right: 54%;
}

.szczecin {
    top: 23%;
    left: 5%;
}

.bydgoszcz {
    top: 33%;
    left: 40%;
}

.wroclaw {
    top: 64%;
    left: 30%;
}

.krakow {
    bottom: 17%;
    left: 59%;
}
</style>
