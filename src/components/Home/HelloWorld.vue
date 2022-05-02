<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      {{ lang.a }}
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">{{ lang.b }}</a>.
    </p>
    <h3>{{ lang.c }}</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">{{ lang.d }}</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa" target="_blank" rel="noopener">{{ lang.e }}</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">{{ lang.f }}</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener">{{ lang.g }}</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">{{ lang.h }}</a></li>
    </ul>
    <h3>{{ lang.i }}</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">{{ lang.j }}</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">{{ lang.k }}</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">{{ lang.m }}</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">{{ lang.n }}</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">{{ lang.o }}</a></li>
    </ul>
    <h3>{{ lang.p }}</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">{{ lang.q }}</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">{{ lang.r }}</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">{{ lang.s }}</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">{{ lang.t }}</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">{{ lang.w }}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "HelloWorld",
    props: {
        msg: String
    },
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
