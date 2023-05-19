<script>
export default {
  name:"HouseView",
  data(){
    return{
      houses:[]
    }
  },
  methods:{

  },
  mounted(){
    fetch("https://api.gameofthronesquotes.xyz/v1/houses")
    .then((response) => {return response.json()})
    .then((response) => this.houses = response)
    .catch((error) => {
      console.log(error);
    });
  }
}
</script>


<template>
  <h2>Houses of the Continent</h2>
  <br>
  <div class="house-table-container">
        <table class="table table-hover house-table">
          <thead>
            <tr>
              <th><h5>Name of the House</h5></th>
              <th><h5>People of the House</h5></th>
            </tr>
          </thead>
          <tbody v-for="house in houses">
            <tr>
              <td>
              <div class="house-name">
                {{house.name}}
              </div>  
              </td>
              <td>
                <div class="house-member" v-for="member in house.members">
                  {{member.name}}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
  </div>
  <router-link to="/" class="btn btn-secondary">Return to Quotes</router-link>
</template>


