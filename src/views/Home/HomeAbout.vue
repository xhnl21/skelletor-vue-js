<template>
  <div>
    <h1>{{ lang.pg_demo }}</h1>
    <div>
        {{info}}<br><br>
        {{info.USD}}<br><br>
        {{info.GBP}}<br><br>
        {{info.EUR}}<br><br>
    </div>
    <div>
        {{infoA}}<br><br>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import axios from "axios";
export default {
    name: "HomeAbout",
    components: {},
    data () {
        return {
            lang:{},
            apis:{},
            info:{},
            infoA:{}
        };
    },
    created () {
        this.init ();
    },
    methods: {
        init () {
            this.lang = this.$store.getters.language;
            this.apis = this.$store.getters.apis.About;
            this.initA ();
            this.initB ();
        },
        http () {
            const url = this.apis.get();
            const type = "get";
            const data = [];
            const upload = false;
            const token = false;
            const promise = false;
            this.resques (url, type, data, upload, token, promise);
        },
        initA () {
            const url = this.apis.get();
            window.master
                .get(url)
                .then((response) => {
                    this.info = response.data.bpi;
                    // console.log(this.info);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        initB () {
            const url = this.apis.getS(3);
            window.mastera
                .get(url)
                .then((response) => {
                    this.infoA = response.data.data;
                    // console.log(this.infoA);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
};
</script>