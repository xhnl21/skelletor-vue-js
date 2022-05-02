<template>
  <div class="HomeAbout">
    <h1>{{ lang.pg_demo }}</h1>
  </div>
</template>
<script>
export default {
    name: "HomesAbout",
    components: {},
    data () {
        return {
            lang:{}
        };
    },
    created () {
        this.lang = this.$store.getters.language;
    }
};
</script>