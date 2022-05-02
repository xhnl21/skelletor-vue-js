// metodos de mutations
export default {
    SetRefreshLaguage (state, val) {
        state.refreshLaguage = val;
    },
    ActiveLateral (state, val) {
        state.lateralShow = val;
    },
    IngresoDimenu (state, val) {
        state.dimenu = val;
    },
    SalirDimenu (state) {
        state.dimenu = false;
    },
    SET_SHOWASIDE (state, showAside) {
        state.showAside = showAside;
    },
    SET_MENU_TAB (state, menutab) {
        state.menutab = menutab;
    },
    SET_CAT_ACTIVE (state, cat) {
        state.menuCatActive = cat;
    },
    SET_IMAGE_ACTIVE_FOOD (state, img) {
        state.imageActiveFood = img;
    },
    SET_CAT_DATA_ASIDE (state, data) {
        state.dataAsideMenu = data;
    },
    SET_ACCTION_ADD_FOOD (state, action) {
        state.dataAsideMenu.existFoods = action;
    },
    SET_RETORNO_ASIDE (state, cat) {
        state.retornoAside = cat;
    },
    SET_CURRENT_SPECIALS (state, data) {
        state.SpecialsItemActive = data;
    },
    SET_SPECIALS_LISTS (state, data) {
        state.SpecialsLists = data;
    },
    SET_ACTIONS_SPECIALS (state, data) {
        state.actionUpdate = data;
    },
    SET_GROUPACTIVE (state, val) {
        state.groupActive = val;
    },
    SET_GROUPLIST (state, val) {
        state.groupList = val;
    },
    SET_LISTCATEGORES (state, val) {
        state.listCategores = val;
    },
    setCropperImagenes (state, val) {
        state.cropperImagenes = val;
    },
    setvariantData (state, val) {
        state.variantData = val;
    },
    setvariantFoodData (state, val) {
        state.variantFoodData = val;
    },
    setnewCategory (state, val) {
        state.newCategory = val;
    },
    setShowModalFood (state, val) {
        state.ShowModalFood = val;
    },
    setNewFood (state, val) {
        state.NewFood = val;
    },
    setClearAside (state, val) {
        state.ClearAside = val;
    }
};
