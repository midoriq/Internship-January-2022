<template>
    <div class="details">
        <h1>Details {{ this.cityData }}</h1>

        <table v-for="item in cityDetails" :key="item.Temp">
            <tr>
                <td>Temperature</td>
                <td>{{ item.Temp }}</td>
            </tr>
            <tr>
                <td>Feels like</td>
                <td>{{ item.Feels_like }}</td>
            </tr>
            <tr>
                <td>Pressure</td>
                <td>{{ item.Pressure }}</td>
            </tr>
            <tr>
                <td>Humidity</td>
                <td>{{ item.Humidity }}</td>
            </tr>
            <tr>
                <td>Max Temperature</td>
                <td>{{ item.MaxTemp }}</td>
            </tr>
            <tr>
                <td>Min Temperature</td>
                <td>{{ item.MaxTemp }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: "details",
    data() {
        return {
            cityDetails: [],
        };
    },
    props: ["cityData"],
    mounted() {
        fetch("http://34.116.152.0/CurrentTemp/" + this.cityData)
            .then((res) => res.json())
            .then((data) => (this.cityDetails = data))
            .catch((err) => console.log(err.message));
    },
};
</script>

<style scoped>
.details {
    padding: 40px 30px;
    background-color: #8aae92;
}

h1 {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 30px;
    margin: 0 30px 15px 0;
}

td {
    padding: 8px 20px;
}
</style>
