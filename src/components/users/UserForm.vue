<script lang="ts">
import type { User } from '@/stores/app';
import { useAppStore } from '@/stores/app';
import { ref } from 'vue';

</script>
        
<script setup lang="ts">

const appStore = useAppStore();
const user = ref({ ...appStore.selectedUser });

const { closeModal, saveUser } = appStore;

const saveUserChanges = () => {
    user.value && saveUser(user.value as User);
    closeModal();
}

</script>
                
<template>
    <div class="user-form" v-if="user?.id">
        <el-form class="user-form-class" :model="user">
            <el-form-item label="name">
                <el-input v-model="user.name" placeholder="username" />
            </el-form-item>
            <el-form-item label="email">
                <el-input v-model="user.email" placeholder="email" />
            </el-form-item>
            <el-form-item label="phone">
                <el-input v-model="user.phone" placeholder="phone number" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="saveUserChanges">Save</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
                
<style scoped lang="scss">
.user-form {
    padding: 20px 0 0;

    .user-form-class {
        display: flex;
        flex-flow: column nowrap;
        gap: 10px;
        align-items: center;
    }
}
</style>