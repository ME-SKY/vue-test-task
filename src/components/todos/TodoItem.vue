<script lang="ts">
import type { Todo } from '@/stores/counter';
import {

    EditPen,
    List
} from '@element-plus/icons-vue'
// import Modal from '@/components/modal/Modal.Vue';
import TodoList from '../todos/TodoList.vue';
import { ref } from 'vue'

interface TodoItemProps {
    todo: Todo
}
</script>
        
<script setup lang="ts">
defineProps<TodoItemProps>();





// const showModal = ref(false)

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



        <!-- {{todo.completed}} -->
    </div>
</template>
                
<style scoped>
.todo {
    display: flex;
    flex-flow: row nowrap;
    /* justify-content: space-evenly; */
    align-items: center;
    /* width: 200px; */
    height: 50px;
    /* background: white; */
    border: 1px solid rgba(1, 3, 3, 0.2);
    border-radius: 5px;
}

.todo-title {
    margin-left: 20px;
}

.todo-status {
    margin-left: auto;
    margin-right: 10px;
}

/* h1 {
                font-weight: 500;
                font-size: 2.6rem;
                top: -10px;
            }
            
            h3 {
                font-size: 1.2rem;
            }
            
            .greetings h1,
            .greetings h3 {
                text-align: center;
            }
            
            @media (min-width: 1024px) {
            
                .greetings h1,
                .greetings h3 {
                    text-align: left;
                }
            } */
</style>