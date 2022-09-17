<script lang="ts">
import type { Todo } from '@/stores/counter';

interface TodoListProps {
    users: Todo[]
}
</script>
    
<script setup lang="ts">
import TodoItem from './TodoItem.vue';
defineProps<TodoListProps>();

</script>
            
<template>
    <div class="todo-list">
        <TodoItem v-for="todo in todos" :user="user" :key="user.id" />
    </div>
</template>
            
<style scoped>
.user-list {
    display: flex;
    flex-flow: column nowrap;
    gap: 20px;
}
</style>