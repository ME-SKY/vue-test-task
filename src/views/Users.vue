<script setup lang="ts">
import UserList from '@/components/users/UserList.vue';
import { useAppStore } from '@/stores/app';
import { storeToRefs } from 'pinia';

const appStore = useAppStore();
const { users } = storeToRefs(appStore);

</script>
    
<template>
    <section class="users">
        <UserList :users="users" />
    </section>
</template>
    
<style scoped>

h1 {
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
}

h3 {
    font-size: 1.2rem;
}
</style>