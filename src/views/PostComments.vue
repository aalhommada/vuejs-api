<template>
  <div v-if="comments.length >= 1">
    <ul>
      <li v-for="comment in comments" :key="comment.id">
        <div class="card">
          <div class="container">
            <img :src="comment.owner.picture" alt="">
            <p>{{ comment.message }}</p>
            <p>
              By : <b>{{ comment.owner.firstName }}</b>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div v-else><p>there is no comments for this post</p></div>
</template>

<script>
import axios from "axios";
const APP_ID = process.env.VUE_APP_ID;
const BASE_URL = "https://dummyapi.io/data/api/post/";

export default {
  //   props: ["id"],
  data() {
    return {
      comments: [],
    };
  },

  mounted() {
    axios
      .get(`${BASE_URL}` + this.$route.params.id + "/comment?limit=10", {
        headers: { "app-id": APP_ID },
      })
      .then((data) => {
        this.comments = data.data.data;
        console.log(data.data.data);
      })
      .catch(console.error);
  },
};
</script >

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 10px 0;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 2px 16px;
}
.container img {
  border-radius: 50%;
}

</style>