<template>
  <div v-if="posts.length >= 0">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    />

    <ul>
      <li v-for="post in posts" :key="post.id">
        <div class="card">
          <img :src="post.image" alt="" />
          <ul class="post-tag">
            <li v-for="(tag, index) in post.tags" :key="index" class="tag-item">
              <div class="tag-item"></div>
              {{ tag }}
            </li>
          </ul>

          <hr />
          <h4>{{ post.text }}</h4>
          <div v-if="post.link">
            <hr />
            <a href="post.link">{{ post.link }}</a>
          </div>

          <hr />
          <div style="display:flex; margin-left:4px;">
            <i class="fas fa-heart" style="color:red; margin:3px;"></i>
          <div >{{ post.likes }} Liks</div>
          </div>

          <router-link :to="{ name: 'postComments', params: { id: post.id } }">
            <button>
              <p><b>Get Post Comments</b></p>
            </button>
          </router-link>
        </div>
      </li>
    </ul>
  </div>
  <div v-else><p>There is no posts</p></div>
</template>

<script>
import axios from "axios";

const APP_ID = process.env.VUE_APP_ID;
const BASE_URL = "https://dummyapi.io/data/api/user/";

export default {
  props: ["id"],
  data() {
    return {
      posts: [],
    };
  },

  mounted() {
    axios
      .get(`${BASE_URL}` + this.$route.params.id + "/post?limit=10", {
        headers: { "app-id": APP_ID },
      })

      .then((data) => {
        this.posts = data.data.data;
        console.log(data.data.data);
      })
      .catch(console.error);
  },
};
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 10px 0;
}
img {
  width: 100%;
  height: 100%;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 2px 16px;
}

.tag-item {
  background-color: coral;
  color: white;
  border-radius: 5px;
  margin: 2px 5px;
  padding: 0 5px;
}
</style>