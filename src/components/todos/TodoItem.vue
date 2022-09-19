<script lang="ts">
import type { Todo } from '@/stores/app';

interface TodoItemProps {
    todo: Todo
}
</script>
        
<script setup lang="ts">
defineProps<TodoItemProps>();

</script>
                
<template>
    <div class="todo">
        <div class="todo-title">
            <span>
                {{todo.title}}
            </span>
        </div>

        <div class="todo-status">
            <el-switch v-model="todo.completed" class="ml-2"
                style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" />
        </div>
    </div>
</template>
                
<style scoped lang="scss">
.todo {
    @include shared.hovering;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    height: 50px;
    border: 1px solid rgba(1, 3, 3, 0.2);
    border-radius: 5px;

    .todo-title {
        margin-left: 20px;
    }

    .todo-status {
        margin-left: auto;
        margin-right: 10px;
    }
}
</style>