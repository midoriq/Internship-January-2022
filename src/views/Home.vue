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
* {
    background-color: #8fbbaf;
}

.home {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.text {
    width: 30%;
    margin-left: 100px;
}

.text h2 {
    font-family: Montserrat;
    font-weight: 700;
    color: #4b5c4f;
    font-size: 30px;

    margin-bottom: 50px;
}

.map {
    position: relative;
}

.map img {
    max-width: 550px;
}

.All {
    position: absolute;
    transform: translate(-50%, -50%);

    cursor: pointer;
}

.cityMark {
    width: 4px;
    height: 4px;
    background-color: black;
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

/*---Cities on map--- */
.warszawa {
    top: 43%;
    right: 30%;
}

.radom {
    top: 57%;
    right: 26%;
}

.bialystok {
    top: 30%;
    right: 12%;
}

.gdansk {
    top: 12%;
    right: 52%;
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
    top: 77%;
    left: 62%;
}
</style>
