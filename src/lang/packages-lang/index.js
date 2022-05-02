const requirePackLang = require.context(".", true, /\.js$/);
const languagesPack = {};

requirePackLang.keys().forEach(fileName => {
    if (fileName === "./index.js") return;

    // Replace ./ and .js
    const path = fileName.replace(/(\.\/|\.js)/g, "");
    const [languageName] = path.split("/");

    if (!languagesPack[languageName]) {
        languagesPack[languageName] = {};
    }

    languagesPack[languageName][path] = requirePackLang(fileName).default;
});

export default languagesPack;
