<template>
	<nav>
		<router-link to="/">{{lang.mHome}}</router-link> |
		<router-link to="/about">{{lang.mAbout}}</router-link>  |
        <SelectLanguage/>
	</nav>
	<router-view/>
</template>
<script>
import SelectLanguage from "./components/App/SelectLanguage.vue";
import { mapGetters } from "vuex";
export default {
    name: "App",
    components: {
        SelectLanguage
    },
    data () {
        return {};
    },
    created () {
        this.init ();
    },
    methods: {
        init () {
            this.language = window.langLocal;
            this.lang = this.$store.getters.language;
        },
        refreshApp () {
            location.reload();
        }
    },
    computed: {
        ...mapGetters(["GetRefreshLaguage"])
    },
    watch: {
        GetRefreshLaguage: function () {
            if (this.GetRefreshLaguage) {
                const g = this.$store.getters["GetRefreshLaguage"];
                const fun = g[0].function;
                if (fun === "refreshApp") {
                    this.refreshApp();
                }
            }
        }
    }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
