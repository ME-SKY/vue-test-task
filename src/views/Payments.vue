<script setup lang="ts">
import { useAppStore } from '@/stores/app';
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';

const appStore = useAppStore();
const {payments} = storeToRefs(appStore);
const {setModalType} = appStore;


onMounted(() => {
    // storeToRefs('')
    setModalType('Payment Info');
});


</script>
    
<template>
    <section class="payments">
        <PaymentsList :payments="payments" />
    </section>
</template>
    
<style scoped>
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