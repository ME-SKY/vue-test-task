<script setup lang="ts">
import UserList from '@/components/users/UserList.vue';
import { useAppStore } from '@/stores/counter';

// defineProps<{
//     msg: string;
// }>();

const appStore = useAppStore(); 
const {users} = appStore;

// console.log('appStoreiS', appStore);


const items = [1,2,3,4,5]
</script>
    
<template>
    <section class="users">
        <!-- <el-card> -->
            <UserList :users="users"/>
        <!-- </el-card> -->
        
    </section>
</template>
    
<style scoped>
section.users {
    /* border: 1px solid black; */
    /* border-radius: 5px; */
    /* background: rgba(255, 0, 225, 0.071); */
}

h1 {
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
}
</style>