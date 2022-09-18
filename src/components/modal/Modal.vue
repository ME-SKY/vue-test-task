<script setup lang="ts">
import {
    Close
} from '@element-plus/icons-vue';
import { useAppStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';

const appStore = useAppStore();
const {modalIsActive} = storeToRefs(appStore);
const {closeModal} = appStore;



// const props = defineProps({
//     show: Boolean
// })
</script>

<template>
    <Teleport to="body">
        <div v-if="modalIsActive" class="modal-mask">
                <div class="modal-wrapper">
                    <div class="modal-container">
                        <div class="modal-header">
                            <div class="modal-title"><slot name="header">default header</slot></div>
                            <div class="modal-close-button"><el-button :icon="Close" class="modal-default-button" @click="closeModal"></el-button></div>
                        </div>

                        <div class="modal-body">
                            <slot name="body">default body</slot>
                        </div>

                        <!-- <div class="modal-footer">
                           
                        </div> -->
                    </div>
                </div>
            </div>
    </Teleport>    
    <!-- <modal :show="showModal" @close="showModal = false">
                <template #header>
                    <h3>Todo list</h3>
                </template>
                <template #body>
                    <TodoList :todos="user.todos"/>            
                </template>
            </modal> -->
    <!-- <div class="modal">
        <Transition name="modal">
            
        </Transition>
    </div> -->
</template>
  
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 60%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
}

/* .modal-title{

} */

</style>
  