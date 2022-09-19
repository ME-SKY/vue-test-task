<script lang="ts">
import type { Todo } from '@/stores/app';

interface TodoListProps {
    todos: Todo[]
}
</script>
    
<script setup lang="ts">
import TodoItem from './TodoItem.vue';
defineProps<TodoListProps>();

</script>
            
<template>
    <div class="todo-list">
        <TodoItem v-for="todo in todos" :todo="todo" :key="todo.id" />
    </div>
</template>
            
<style scoped lang="scss">
.todo-list {
    padding: 20px;
    display: flex;
    flex-flow: column nowrap;
    gap: 20px;
}
</style>