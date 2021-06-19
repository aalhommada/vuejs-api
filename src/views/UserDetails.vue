<template>
  <div v-if="user" class="row">
    <div class="container">
      <div class="card">
        <div class="row">
          <div class="col">
            <img v-bind:src="user.picture" :alt="user.name" />
          </div>
          <div class="col">
            <div class="container">
              <div class="mini-container">
                <h4>Name :</h4>
                <b>{{ user.firstName }} {{ user.lastName }}</b>
              </div>
              <div class="mini-container">
                <h4>Email :</h4>
                <p>{{ user.email }}</p>
              </div>
              <div class="mini-container">
                <h4>Gender :</h4>
                <p>{{ user.gender }}</p>
              </div>
              <div class="mini-container">
                <h4>Phone :</h4>
                <p>{{ user.phone }}</p>
              </div>
              <div class="mini-container">
                <h4>Country :</h4>
                <p>{{ user.location.country }}</p>
              </div>

              <router-link
                :to="{ name: 'userPosts', params: { id: user.id } }"
                class="router-link"
              >
                <button>
                  <p>Get {{ user.firstName }} Posts</p>
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>loading ...</div>
</template>

<script>
import axios from "axios";

const APP_ID = process.env.VUE_APP_ID;
const BASE_URL = "https://dummyapi.io/data/api/user/";

export default {
  props: ["id"],
  data() {
    return {
      user: null,
    };
  },

  mounted() {
    // axios.get(json_url + this.$route.params.id)
    axios
      .get(`${BASE_URL}` + this.$route.params.id, {
        headers: { "app-id": APP_ID },
      })

      .then((data) => {
        this.user = data.data;
        console.log(data.data);
      })
      .catch(console.error);
  },
};
</script>

<style scoped>
img {
  width: 100%;
}
.row {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.col {
  width: 50%;
  margin: auto;
}
</style>