<template>
    <div class="home">
        <img alt="Vue logo" src="../../assets/logo.png" />
        <HelloWorld :msg="lang.welcome" />
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/Home/HelloWorld.vue";
export default {
    name: "HomesDash",
    components: {
        HelloWorld
    },
    data () {
        return {
            lang: {}
        };
    },
    created () {
        this.lang = this.$store.getters.language;
    }
};
</script>
