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

        <div class="payment-actions">
            <el-button :icon="InfoFilled" @click="showInfo()">
            </el-button>
        </div>
    </div>
</template>
                    
<style scoped lang="scss">
.payment {
    @include shared.hovering;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    border: 1px solid rgba(1, 3, 3, 0.2);

    & > *:not(.el-icon) {
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

    .payment-actions {
        margin-left: auto;
        margin-right: 20px;
    }
}
</style>