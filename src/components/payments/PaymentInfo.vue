<script lang="ts">
import type { Payment } from '@/stores/app';
import {
    InfoFilled
} from '@element-plus/icons-vue';
import { useAppStore } from '@/stores/app';
import { storeToRefs } from 'pinia';

</script>
                
<script setup lang="ts">
const appStore = useAppStore();
// const { openModal, selectPayment } = appStore;
const {selectedPayment} = storeToRefs(appStore);
// const {}

// const showInfo = () => {
//     selectPayment(payment);
//     openModal()
// }

</script>
                        
<template>
    <div class="payment-info" v-if="selectedPayment">
        <div class="payer">
            <span>
                Payer: {{selectedPayment.payerName}}
            </span>
        </div>

        <div class="reciever">
            <span>
                Reciever: {{selectedPayment.recieverName}}
            </span>
        </div>

        <div class="sum">
            <span>
                Sum: {{selectedPayment.sum}}
            </span>
        </div>

        <div class="currency">
            <span>
                Currency: {{selectedPayment.currency}}
            </span>
        </div>

        <div class="date">
            <span>
                Date: {{selectedPayment.datetime.toDateString()}}
            </span>
        </div>

        <!-- <div class="payment-actions">
            <el-button :icon="InfoFilled" @click="showInfo()">
            </el-button>
        </div> -->
    </div>
</template>
                        
<style scoped>
.payment {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    height: 50px;
    border: 1px solid rgba(1, 3, 3, 0.2);
    border-radius: 5px;
}

.payment-actions {
    margin-left: auto;
    margin-right: 20px;
}
</style>  