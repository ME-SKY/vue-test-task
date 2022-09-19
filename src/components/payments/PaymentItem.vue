<script lang="ts">
import type { Payment } from '@/stores/app';
import {
    InfoFilled
} from '@element-plus/icons-vue';
import { useAppStore } from '@/stores/app';

interface PaymentItemProps {
    payment: Payment
}
</script>
            
<script setup lang="ts">
// defineProps<PaymentItemProps>();
const { payment } = defineProps(['payment']);

const appStore = useAppStore();
const { openModal, selectPayment } = appStore;

const showInfo = () => {
    //
    selectPayment(payment);
    openModal()
}

</script>
                    
<template>
    <div class="payment">
        <div class="payer">
            <span>
                {{payment.payerName}}
            </span>
        </div>
        <el-icon>
            <Right />
        </el-icon>
        <div class="reciever">
            <span>
                {{payment.recieverName}}
            </span>
        </div>

        <div class="sum">
            <span>
                {{payment.sum}} {{payment.currency}}
            </span>
        </div>

        <!-- <div class="currency">
            <span>
                {{payment.currency}}
            </span> -->
        <!-- </div> -->

        <div class="payment-actions">
            <el-button :icon="InfoFilled" @click="showInfo()">
            </el-button>
        </div>
    </div>
</template>
                    
<style scoped>
.payment {
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    border: 1px solid rgba(1, 3, 3, 0.2);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
}

/* .payment:hover{
    box-shadow: 0px 2px 5px 2px rgb(0 0 0 / 17%);
} */

.payment::after {
    position: absolute;
    content: '';
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 0;
    box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.20);
    transition: opacity 0.3s ease-in-out;
}

/* Transition to showing the bigger shadow on hover */
.payment:hover {
  transform: scale(1.01);
}

/* Fade in the pseudo-element with the bigger shadow */
.payment:hover::after {
  opacity: 1;
}

.payment>*:not(.el-icon) {
    width: 80px;
    text-align: center;
}

.payer {
    margin-left: 10px;
}

.el-icon {
    margin: 0 10px;
    width: 20px
}

/* .payer, .reciever, .sum, .currency {
    margin-left: 5px;
    margin-right: 5px;
    width: 70px;
} */

.payment-actions {
    margin-left: auto;
    margin-right: 20px;
}
</style>