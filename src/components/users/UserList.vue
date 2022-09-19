<script lang="ts">
import type { User } from '@/stores/app';

interface UserListProps {
    users: User[]
}
</script>

<script setup lang="ts">
import UserItem from './UserItem.vue';
defineProps<UserListProps>();

</script>
        
<template>
    <div class="user-list">
        <UserItem v-for="user in users" :user="user" :key="user.id"  /> 
    </div>
</template>
        
<style scoped>

    .user-list{
        display: flex;
        flex-flow: column nowrap;
        gap: 20px;
    }
</style>