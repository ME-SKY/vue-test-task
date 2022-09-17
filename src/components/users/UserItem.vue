<script lang="ts">
import type { User } from '@/stores/counter';
import {
//   Check,
//   Delete,
  EditPen,
  List
//   Message,
//   Search,
//   Star,
} from '@element-plus/icons-vue'

interface UserProps {
    user: User
}
</script>
    
<script setup lang="ts">
defineProps<UserProps>();

</script>
            
<template>
    <div class="user">
        <div class="info">name: {{user.name}}, email: {{user.email}}</div>
        <div class="actions">
            <el-button :icon="List"></el-button>
            <el-button :icon="EditPen" />

            <!-- <el-icon><EditPen /></el-icon> -->
        </div> 
    </div>
</template>
            
<style scoped>

    .user{
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

    .info{
        margin-left: 20px;
    }

    .actions{
        margin-left: auto;
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