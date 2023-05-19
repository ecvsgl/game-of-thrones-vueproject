<script>
export default {
  name:"HouselessView",
  data(){
    return{
      characters:[]
    }
  },
  methods:{

  },
  mounted(){
    fetch("https://api.gameofthronesquotes.xyz/v1/characters")
    .then((response) => {return response.json()})
    .then((response) => {
      this.characters = response.filter(item => item.house === null);
    })
    .catch((error) => {
      console.log(error);
    });
  }
}
</script>


<template>
  <h2>The Houseless Ones</h2>
  <br>
  <div class="houseless-table-container">
        <table class="table table-hover houseless-table">
          <thead>
            <tr>
              <th><h5>Character</h5></th>
            </tr>
          </thead>
          <tbody v-for="character in characters">
            <tr>
              <td>
              <div class="house-name">
                {{character.name}}
              </div>  
              </td>
            </tr>
          </tbody>
        </table>
  </div>
  <router-link to="/" class="btn btn-secondary">Return to Quotes</router-link>
</template>


