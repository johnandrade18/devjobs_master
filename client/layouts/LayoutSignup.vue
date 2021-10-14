<template>
    <div>
    <Header_signup/>
    <Nuxt/>
    <Footer_auth/>
    </div>
</template>

<script>
import Header_signup from '@/components/Header_signup.vue'
import Footer_auth from '@/components/Footer_auth.vue'
export default {
    components:{Header_signup, Footer_auth}
}
</script>