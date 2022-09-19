<script setup lang="ts">
import { useAppStore } from '@/stores/app';
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';

const appStore = useAppStore();
const {payments} = storeToRefs(appStore);
const {setModalType} = appStore;


onMounted(() => {
    setModalType('Payment Info');
});


</script>
    
<template>
    <section class="payments">
        <PaymentsList :payments="payments" />
    </section>
</template>
    