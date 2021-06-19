<template>
  <div id="nav">
    <router-link to="/">Users</router-link> |
    <router-link to="/about">About</router-link> |
  </div>

  <router-view />
</template>

<script>
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.container {
  width: 80%;
}
.mini-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid coral;
  width: 100%;
  margin-right: auto;
}

h4 {
  color: coral;
  margin: 15px 20px;
}

ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  list-style: none;
  justify-content: center;
}
ul li {
  width: 20%;
  margin: 10px;
}

button {
  background-color: white;
  color: black;
  border: 2px solid coral;
  border-radius: 20px;
  margin: 20px;
  padding: 10 20px;
  font-weight: bold;
}

button {
  transition-duration: 0.4s;
}

button:hover {
  background-color: coral; /* Green */
  color: white;
  cursor: pointer;
}
a {
  text-decoration: none;
  color: rgb(179, 72, 72);
}
a:hover {
  color: white;
}

hr{
  width:80%;
}
</style>
