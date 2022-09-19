<script lang="ts">
import type { User } from '@/stores/app';
import { useAppStore } from '@/stores/app';
import {
    EditPen,
    List
} from '@element-plus/icons-vue';

interface UserProps {
    user: User
};
</script>
    
<script setup lang="ts">
defineProps<UserProps>();

const appStore = useAppStore();
const { openModal, setModalType, selectUser } = appStore;

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

</script>
            
<template>
    <div class="user">
        <div class="info">name: {{user.name}}, email: {{user.email}}</div>
        <div class="actions">
            <el-button :icon="List" @click="showTodos(user.id)" />
            <el-button :icon="EditPen" @click="editUser(user.id)" />
        </div>
    </div>
</template>
            
<style scoped lang="scss">
.user {
    @include shared.hovering;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    height: 50px;
    background: white;
    border: 1px solid rgba(1, 3, 3, 0.2);
    border-radius: 5px;

    .info {
        margin-left: 20px;
    }

    .actions {
        margin-left: auto;
        margin-right: 10px;
    }
}
</style>