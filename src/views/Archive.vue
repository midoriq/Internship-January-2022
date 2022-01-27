<template>
    <div class="container">
        <h2>Archive of all measurments</h2>
        <table class="table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="archiveItem in archiveTemp" :key="archiveItem.Date">
                    <td>{{ archiveItem.Date }}</td>
                    <td>{{ archiveItem.Temp }}</td>
                    <td>{{ archiveItem.Pressure }}</td>
                    <td>{{ archiveItem.Humidity }}</td>
                </tr>
            </tbody>
        </table>

        <div class="show">
            <p class="more" v-on:click="showMoreLess('more')">show more</p>
            <p
                class="less"
                v-if="this.showNo >= 10"
                v-on:click="showMoreLess('less')"
            >
                show less
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "archive",
    data() {
        return {
            archiveTemp: [],
            showNo: 5,
        };
    },
    methods: {
        fetchData() {
            fetch("http://34.116.152.0/Measurments/" + this.showNo)
                .then((res) => res.json())
                .then((data) => (this.archiveTemp = data.Measurments))
                .catch((err) => console.log(err.message));
        },
        showMoreLess(choose) {
            if (choose == "more") this.showNo += 5;
            else if (choose == "less") this.showNo -= 5;
            this.fetchData();
        },
    },
    mounted() {
        this.fetchData();
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
    font-family: Open Sans;
}

h2 {
    font-family: Montserrat;
    font-weight: 700;
    color: #8fbbaf;
    font-size: 35px;
}

td,
th {
    padding: 10px;
    text-align: center;
}

th {
    background-color: #8fbbaf;
}

table,
h2 {
    width: 70%;
    margin: 30px auto 0 auto;
}

table {
    border-collapse: collapse;
}
table tr:nth-child(even) {
    background-color: #f4f9f4;
}

.show {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 30px 0 40px 0;
}

.show p {
    font-size: 14px;

    color: black;
    cursor: pointer;
    transition: ease all 0.4s;
}

.show p:hover {
    color: #c4e3cb;
}

.more {
    margin-right: 40px;
}
</style>
