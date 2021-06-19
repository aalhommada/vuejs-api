<template>
  <div>
    <ul>
      <li v-for="user in users" :key="user.id">
        <div class="card">
          <img v-bind:src="user.picture" :alt="user.name" style="width: 100%" />
          <div class="container">
            <div class="mini-container">
              <h4>Name :</h4>
              <b>{{ user.firstName }} {{ user.lastName }}</b>
            </div>

            <router-link
              :to="{ name: 'userDetails', params: { id: user.id } }"
              class="router-link"
            >
              <button>Get {{ user.firstName }} details</button>
            </router-link>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

const APP_ID = process.env.VUE_APP_ID;
const BASE_URL = "https://dummyapi.io/data/api/user?limit=10";

export default {
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    axios
      .get(`${BASE_URL}/user`, { headers: { "app-id": APP_ID } })
      .then((data) => {
        this.users = data.data.data;
        console.log(process.env.APP_ID);
      })
      .catch(console.error);
  },
};
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}
.card.img {
  width: 100%;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
</style>