"use strict";

import gulp from "gulp";

const requireDir = require("require-dir"),
    paths = {
        views: {
            src: [
                "./src/views/index.pug",
                "./src/views/pages/*.pug"
            ],
            dist: "./dist/",
            watch: [
                "./src/blocks/**/*.pug",
                "./src/views/**/*.pug"
            ]
        },
        styles: {
            src: "./src/styles/main.scss",
            dist: "./dist/styles/",
            watch: [
                "./src/blocks/**/*.scss",
                "./src/styles/**/*.scss"
            ]
        },
        scripts: {
            src: "./src/js/index.js",
            dist: "./dist/js/",
            watch: [
                "./src/blocks/**/*.js",
                "./src/js/**/*.js"
            ]
        },
        images: {
            src: [
                "./src/img/**/*.{jpg,jpeg,png,gif,tiff,svg,mp4}",
                "!./src/img/svg/*.svg",
                "!./src/img/favicon.{jpg,jpeg,png,gif}"
            ],
            dist: "./dist/img/",
            watch: "./src/img/**/*.{jpg,jpeg,png,gif,svg}"
        },
        webp: {
            src: [
                "./src/img/**/*.{jpg,jpeg,png,tiff}",
                "!./src/img/favicon.{jpg,jpeg,png,gif}"
            ],
            dist: "./dist/img/",
            watch: [
                "./src/img/**/*.{jpg,jpeg,png,tiff}",
                "!./src/img/favicon.{jpg,jpeg,png,gif}"
            ]
        },
        sprites: {
            src: "./src/img/svg/*.svg",
            dist: "./src/img/sprites/",
            watch: "./src/img/svg/*.svg"
        },
        video: {
            src: "./src/video/**/*.{mov,mp4}",
            dist: "./dist/video/",
            watch: "./src/video/**/*.{mov,mp4}"
        },
        fonts: {
            src: "./src/fonts/**/*.{woff,woff2,ttf,eot,svg}",
            dist: "./dist/fonts/",
            watch: "./src/fonts/**/*.{woff,woff2,ttf,eot,svg}"
        },
        favicons: {
            src: "./src/img/favicon.{jpg,jpeg,png,gif}",
            dist: "./dist/img/favicons/",
        },
        gzip: {
            src: "./src/.htaccess",
            dist: "./dist/"
        }
    };

requireDir("./gulp-tasks/");

export { paths };

// export const development = gulp.series("clean", "smart-grid", //removed smart grid
export const development = gulp.series("clean",
    gulp.parallel(["views", "styles", "scripts","sprites", "images", "webp", "fonts", "video","favicons"]),
    gulp.parallel("serve"));

export const prod = gulp.series("clean",
    gulp.series(["views", "styles", "scripts", "sprites", "images", "webp",  "fonts", "video" , "favicons", "gzip"]));
export default development;
