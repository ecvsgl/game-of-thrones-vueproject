<script>
  export default {
    name: "HomeView",
    data(){
      return{
        item:{
          sentence: '',
          charactername: '',
          housename: ''
        } 
      }
    },
    methods:{
        reFetchData(){
        fetch("https://api.gameofthronesquotes.xyz/v1/random")
        .then((response) => {return response.json()})
        .then((response)=> {
          this.item.sentence = response.sentence;
          this.item.charactername = response.character.name;
          this.item.housename = response.character.house.name;
        }).catch((error) => {
          console.log(error);
        });
      }
    },
    mounted(){
      fetch("https://api.gameofthronesquotes.xyz/v1/random")
        .then((response) => {return response.json()})
        .then((response)=> {
          this.item.sentence = response.sentence;
          this.item.charactername = response.character.name;
          this.item.housename = response.character.house.name;
        }).catch((error) => {
          console.log(error);
        });
   }
  }
</script>

<template>
  <div>
    <ul>
      <li :class="'sentence-item'">{{item.sentence}}</li> <br>
      <li :class="'character-item'" v-if="this.item.housename == ''">{{this.item.charactername}}</li>
      <li :class="'character-item'" v-else-if="this.item.housename == null">{{this.item.charactername}}</li>
      <li :class="'character-item'" v-else>{{this.item.charactername+ " - " +this.item.housename}}</li>
    </ul>
  </div>
    <button class="btn btn-secondary" @click="reFetchData()">Give new Quote</button>
    <router-link to="/houses" class="btn btn-secondary">How many houses are there?</router-link>
    <router-link to="/houseless" class="btn btn-secondary">Who doesn't have a House?</router-link>
</template>
