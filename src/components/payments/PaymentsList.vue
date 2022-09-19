<script lang="ts">
import type { Payment } from '@/stores/app';
import PaymentItem from './PaymentItem.vue';

interface PaymentsListProps {
    payments: Payment []
}
</script>
        
<script setup lang="ts">
defineProps<PaymentsListProps>();

</script>
                
<template>
    <div class="payment-list">
        <PaymentItem v-for="payment in payments" :payment="payment" :key="payment.id" />
    </div>
</template>
                
<style scoped lang="scss">
.payment-list {
    display: flex;
    flex-flow: column nowrap;
    gap: 20px;
}
</style>