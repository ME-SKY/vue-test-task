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
    