const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Includes
const head = fs.readFileSync("src/includes/head.html");
const sectionHeader = fs.readFileSync("src/includes/section-header.html");
const sectionHeaderIndex = fs.readFileSync("src/includes/section-header-index.html");
const sectionFooter = fs.readFileSync("src/includes/section-footer.html");
const temp = fs.readFileSync("src/includes/temp.html");

// Pages
module.exports = [
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html",
        inject: "body",
        title: "Vetgenomics | Главная",
        head,
        sectionHeader,
        sectionHeaderIndex,
        sectionFooter,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/animal-detail.html",
        filename: "animal-detail.html",
        inject: "body",
        title: "Vetgenomics | Карточка животного",
        head,
        sectionHeader,
        sectionFooter,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/test-detail.html",
        filename: "test-detail.html",
        inject: "body",
        title: "Vetgenomics | Карточка теста",
        head,
        sectionHeader,
        sectionFooter,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/animal-catalog.html",
        filename: "animal-catalog.html",
        inject: "body",
        title: "Vetgenomics | Каталог животных",
        head,
        sectionHeader,
        sectionFooter,
        temp
    }),
];