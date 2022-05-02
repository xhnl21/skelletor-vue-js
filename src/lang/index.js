// archivo unificador de paquetes de idiomas
import packagesLang from "./packages-lang";
const lang = {en:{}, es:{}}; // arreglo global
// recorriendo objectos para unificar segun el idiona
const packLang = packagesLang;
Object.keys(packLang).forEach(packName => {
    // console.log('packName', packLang[packName])
    if(packLang[packName].en) { // ingles
        lang.en= Object.assign(lang.en, packLang[packName].en);
    }
    if(packLang[packName].es) { // español
        lang.es= Object.assign(lang.es, packLang[packName].es);
    }
});
export default lang;
