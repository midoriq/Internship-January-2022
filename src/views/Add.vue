<template>
<div class="container">
     <p v-if = "errors.length" class = "error">
          <b>Please correct the following error(s): </b>
          <ul>
               <li v-for = "error in errors" :key = "error"> {{ error }}</li>
          </ul>
     </p>

    <h2>Add new city</h2>
    <input type="text" placeholder="Name" v-model="city.name" /><br />
    <input type="text" v-model="city.latitude" placeholder="Latitude"/><br />
    <input type="text" v-model="city.longitude" placeholder="Longitude" /><br />

    <button v-on:click="addCity">Submit</button>
</div>

</template>

<script>
export default {
    name: "add",
    data() {
        return {
            city: {
                name: null,
                latitude: null,
                longitude: null,
            },
            errors: []
        };
    },
    methods: {
        addCity() {
             this.errors = [];
             if(!this.city.name){
                  this.errors.push('Name required');
             }
             if (!this.city.latitude || !this.city.longitude){
                  this.errors.push('Coords required')
             }

             let latTemp = Math.round(this.city.latitude);
             let logTemp = Math.round(this.city.longitude);

             if(latTemp < -90 || latTemp > 90){
                  this.errors.push('Latitude must be between -90 and 90 degrees inclusive')
             }

             if(logTemp < -180 || logTemp > 180){
                  this.errors.push('Latitude must be between -90 and 90 degrees inclusive')
             }


          if(this.errors.length == 0){
            let newCity = {
                Name: this.city.name,
                Latitude: this.city.latitude,
                Longitude: this.city.longitude,
            };
            console.log(newCity);
            this.$http.post("http://34.116.152.0/AddCoords", newCity)
               .then(this.$router.push({ path: "/cities"}));
          }

        },
    },
};
</script>

<style scoped>
*{
     width: 100%;
}

.container{
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     width: 20%;

     margin: 50px auto 0 auto;
}

h2 {
    font-family: Montserrat;
    font-weight: 700;
    color: #8aae92;
    font-size: 30px;
    margin-bottom: 20px;
}

input{
     padding: 15px;
     border: 1px solid #ccc;
     border-radius: 3px;
     width: 100%;
     color: #2c3e50;
     font-size: 13px;
}

button{
     width: 100px;
     background: #ACDEAA;
     font-weight: bold;
     color: white;
     border: 0 none;
     border-radius: 1px;
     cursor: pointer;
     padding: 10px 5px;
}

button:hover{
     box-shadow: 0 0 0 2px white, 0 0 0 3px #ACDEAA;
}

.error{
     color: red;
     margin-bottom: 10px;
}

.error ul li{
     list-style-type: none;
     padding-left: 20px;
}
</style>
