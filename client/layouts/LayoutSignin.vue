<template>
    <div>
    <Header_signin/>
    <Nuxt/>
    <Footer_auth/>
    </div>
</template>

<script>
import Header_signin from '@/components/Header_signin.vue'
import Footer_auth from '@/components/Footer_auth.vue'
export default {
    components:{Header_signin, Footer_auth}
}
</script>