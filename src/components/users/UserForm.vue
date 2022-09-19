<script lang="ts">
    import type { User } from '@/stores/app';
    import {
        EditPen,
        List,
        // Save
    } from '@element-plus/icons-vue'
    import Modal from '@/components/modal/Modal.vue';
    import TodoList from '../todos/TodoList.vue';
    import { ref, onMounted } from 'vue';
    import {useAppStore} from '@/stores/app'
    import {storeToRefs} from 'pinia';
    
    interface UserProps {
        user: User
    };
    </script>
        
    <script setup lang="ts">
    // defineProps<UserProps>();
    
    const appStore = useAppStore();
    const {selectedUser} = storeToRefs(appStore);
    const user = ref({...appStore.selectedUser});
    // console.log(user);
    
    // console.log('selected user is:', selectedUser);

    // onMounted(() => {
    //     c
    // });
    
    const {openModal, closeModal, setModalType, selectUser, saveUser} = appStore;

    const saveUserChanges = () => {
        user.value && saveUser(user.value as User);
        closeModal();
    }
    
    // const showTodos = (userId: number) => {
    //     selectUser(userId);
    //     setModalType('Todo List');
    //     openModal()
    // }
    
    // const editUser = (userId: number) => {
    //     selectUser(userId);
    //     setModalType('User Editing');
    //     openModal();
    // }
    
    // const 
    
    </script>
                
    <template>
        <div class="user-form" v-if="user?.id">
            <el-form class="user-form-class" :model="user">
                <el-form-item label="name" class="form-item">
                    <el-input v-model="user.name" placeholder="username" />
                </el-form-item>
                <el-form-item label="email">
                    <el-input v-model="user.email" placeholder="email"/>
                </el-form-item>
                <el-form-item label="phone">
                    <el-input v-model="user.phone" placeholder="phone number"/>
                </el-form-item>
                <el-form-item class="ac">
                    <el-button type="primary" @click="saveUserChanges">Save</el-button>
                </el-form-item>
            </el-form>
            <!-- <form @submit.prevent="saveUserChanges()">
                <div class="user-form-field">
                    <label>name</label>
                <el-input v-model="user.name" placeholder="user name" />
            </div>
            <div class="user-form-field">
                <label>email</label>
                <el-input v-model="user.email" placeholder="email" />
            </div>
            <div class="user-form-field">
                <label>phone</label>
                <el-input v-model="user.phone" placeholder="phone number" />
            </div> 
            <div class="user-form-actions">
                <el-button :icon="List" @click="showTodos(user.id)"/>
                <el-button native-type="submit">Save</el-button>
            </div>
            </form> -->
        </div>
    </template>
                
    <style scoped>
    .user-form {
        padding: 20px 0 0;
        /* display: flex; */
        /* flex-flow: row nowrap; */
        /* justify-content: space-evenly; */
        /* align-items: center; */
        /* width: 200px; */
        /* height: 50px; */
        /* background: white; */
        /* border: 1px solid rgba(1, 3, 3, 0.2); */
        /* border-radius: 5px; */
    }
    /* .user-form form {
        display: flex;
        flex-flow: row wrap;
        gap: 10px;
        /* justify-content: ; */
        /* align-items: center; */
    /* }  */

    .user-form-class{
        display: flex;
        flex-flow: column nowrap;
        gap: 10px;
        /* justify-content: center ; */
        align-items: center;
    }
    .user-form-field{
        flex: calc(33% - 10px);
    }

    .form-item{
        display: flex;
        align-items: center;
        justify-items: center;
    }

    .user-form-actions{
        margin: 20px auto 0;
    }
    
    </style>