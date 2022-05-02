// metodos para consultas de status
export default {
    language (state) {
        return state.language[window.langLocal];
    },
    menutab (state) {
        return state.menutab;
    },
    apis (state) {
        return state.apis;
    },
    GetRefreshLaguage (state) {
        return state.refreshLaguage;
    }
};
