<template>
	<select v-if="language === 'en'" v-model="language"  @change="selectedLanguage($event)">
		<option value="en" selected disabled>{{lang.languageEn}}</option>
		<option value="es">{{lang.languageSp}}</option>
	</select>
	<select v-else v-model="language"  @change="selectedLanguage($event)">
		<option value="es" selected disabled>{{lang.languageSp}}</option>
		<option value="en">{{lang.languageEn}}</option>
	</select>
</template>
<script>
export default {
    name: "SelectLanguage",
    data () {
        return {
            lang:{},
            language:""
        };
    },
    created () {
        this.init ();
    },
    methods: {
        init () {
            this.language = window.langLocal;
            this.lang = this.$store.getters.language;
        },
        selectedLanguage () {
            localStorage.setItem("langLocal", this.language);
            const name = "refreshApp";
            const data = true;
            this.array (name, data);
        },
        array (name, data) {
            const k = [];
            k.push({ function:name, data:data });
            this.$store.commit("SetRefreshLaguage", k);
        }
    }
};
</script>
<style lang="scss">
</style>
