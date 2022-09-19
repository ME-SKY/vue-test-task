<script setup lang="ts">
import { RouterView } from "vue-router";
import { useAppStore } from "./stores/app";
import Modal from "@/components/modal/Modal.vue";
import { storeToRefs } from 'pinia';
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import TodoList from "./components/todos/TodoList.vue";
import UserForm from "./components/users/UserForm.vue";
import PaymentInfo from "./components/payments/PaymentInfo.vue";

const router = useRouter();
const appStore = useAppStore();
const { modalType, userTodos } = storeToRefs(appStore);
const route = useRoute();
const currentRouteName = ref('users');


const changeRoute = (value: string) => {
  router.push(`/${value}`);
}

watch(() => route.name, () => {
  const routeName: string = route.name ? route.name.toString() : '';
  currentRouteName.value !== routeName && (currentRouteName.value = routeName);
});

</script>

<template>

  <Transition appear name="appear" >
    <header>
    <nav>
      <el-radio-group v-model="currentRouteName" @change="changeRoute">
        <el-radio-button label="users"></el-radio-button>
        <el-radio-button label="payments"></el-radio-button>
      </el-radio-group>
    </nav>
  </header>
  </Transition>
  

  <Transition appear name="appear" >

    <main>
    <el-card class="main-card">
      <RouterView />
    </el-card>
  </main>
  </Transition>


  <Transition appear name="appear" >

  </Transition>
  

  <Modal>
    <template #header>
      <h3>{{modalType}}</h3>
    </template>
    <template #body>
      <TodoList v-if="modalType === 'Todo List'" :todos="userTodos" />
      <UserForm v-if="modalType === 'User Editing'" />
      <PaymentInfo v-if="modalType === 'Payment Info'"/>
    </template>
  </Modal>




</template>

<style scoped>

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

.main-card {
  height: 90%;
  overflow-y: auto;
}

.main-card .el-card__body {
  height: 20px;
}

nav .el-radio-button {
  flex-wrap: nowrap;
  flex: 0 0 50%;
  min-width: 90px;
}

main {
  width: 100%;
  padding: 20px;
  height: 100%;
}

.appear-enter-active,
.appear-leave-active {
  transition: opacity 0.8s ease;
}


.appear-enter-from,
.appear-leave-to {
  opacity: 0;
}

</style>
