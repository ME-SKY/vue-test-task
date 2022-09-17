<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter();
// const route = useRoute();
const currentRoute = ref('users');
// const radio1 = ref('New York');
// const radio2 = ref('New York');
// const radio3 = ref('New York');

const changeRoute = (value: string) => {
  router.push(`/${value}`);
  // switch (value) {
  //   case 'users':
  //   // currentRoute.
  //     router.push('/users');
  //     break;

  //   case 'payments':
  //     router.push('/payments');
  //     break;

  //   default:
  //     break;
  // }
}

const handleClick = (event: any, name: any) => {
  console.log('it runs')

}


</script>

<template>

  <!-- <el-container> -->
  <!-- <div class="main"> -->
    <header>
      <!-- <header> -->

      <nav>
        <el-radio-group v-model="currentRoute" @change="changeRoute">
          <el-radio-button label="users"></el-radio-button>
          <el-radio-button label="payments"></el-radio-button>
        </el-radio-group>
      </nav>
      <!-- </div> -->
      <!-- </header> -->
    </header>
    <main>
      <el-card class="main-card">
         <RouterView />
      </el-card>
     
    </main>
  <!-- </div> -->

  <!-- </el-container> -->



</template>

<style scoped>
/* .el-radio-button{
  width: 90px;
 } */

/* .el-radio-button__inner{
  width: 90%;
 } */

/* el-radio-group{ */
/* display: flex; */
/* }   */

header {
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

nav {
  display: flex;
  flex-flow: column nowrap;
  justify-items: center;
  align-items: center;
}

nav .el-radio-group {
  flex-wrap: nowrap;
}

nav span.el-radio-button__inner {
  background: violet;
}

.main-card{
  /* height: 100%; */
  height: 90%;
  overflow-y: auto;
}

.main-card .el-card__body{
  height: 20px;
}

/* nav .el-radio-group el-radio-button__original-radio{ */
/* background: red; */
/* } */
nav .el-radio-button {
  flex-wrap: nowrap;
  /* background: red; */
  flex: 0 0 50%;

  min-width: 90px;
}


/* .el-radio-button__inner{ */
/* width: 100% !important; */
/* flex: 0 0 50%; */
/* } */

main {
  /* overflow-y: hidden; */
  width: 100%;
  padding: 20px;
  height: 100%;
  /* height: 50%; */
}

/* .logo {
  display: block;
  margin: 0 auto 2rem;
} */

/* nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
