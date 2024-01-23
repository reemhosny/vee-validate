<template>
  <div id="app">
    <aside>
      <router-link to="/" class="link">Home</router-link>
      <router-link to="/basic-form" class="link">Basic Form</router-link>
      <router-link to="/dynamic-form-generator" class="link"
        >Dynamic Form Generator</router-link
      >
    </aside>

    <main class="flex">
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo" alt="Vue logo" />
      </a>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup></script>

<style scoped>
/* General styles for the app */
#app {
  display: flex;
}

/* Style for the aside element (left column) */
aside {
  display: flex;
  gap: 16px;
  flex-direction: column;
  background-color: #f0f0f0;
  padding: 10px;
  border-right: 1px solid #ccc;
}

/* Style for router links in the aside */
.link {
  display: block;
  margin-bottom: 10px;
  color: #333;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
}

.link:hover {
  color: #42b883;
}

/* Style for the main element (right column) */
main {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 3;
  flex: 3; /* Adjust the ratio of the left and right columns as needed */
  padding: 10px;
}

.logo {
  width: 150px;
}
</style>
