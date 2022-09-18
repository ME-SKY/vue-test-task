<script lang="ts">
import type { User } from '@/stores/counter';
import {
    EditPen,
    List
} from '@element-plus/icons-vue'
import Modal from '@/components/modal/Modal.vue';
import TodoList from '../todos/TodoList.vue';
import { ref, onMounted } from 'vue';
import {useAppStore} from '@/stores/counter'

interface UserProps {
    user: User
};
</script>
    
<script setup lang="ts">
defineProps<UserProps>();

const appStore = useAppStore();
const {openModal, setModalType, selectUser} = appStore;

const showTodos = (userId: number) => {
    selectUser(userId);
    setModalType('Todo List');
    openModal()
}

const editUser = (userId: number) => {
    selectUser(userId);
    setModalType('User Editing');
    openModal();
}

// const 

</script>
            
<template>
    <div class="user">
        <div class="info">name: {{user.name}}, email: {{user.email}}</div>
        <div class="actions">
            <el-button :icon="List" @click="showTodos(user.id)"/>
            <el-button :icon="EditPen" @click="editUser(user.id)"/>
        </div>
    </div>
</template>
            
<style scoped>
.user {
    display: flex;
    flex-flow: row nowrap;
    /* justify-content: space-evenly; */
    align-items: center;
    /* width: 200px; */
    height: 50px;
    background: white;
    border: 1px solid rgba(1, 3, 3, 0.2);
    border-radius: 5px;
}

.info {
    margin-left: 20px;
}

.actions {
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