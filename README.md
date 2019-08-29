# Cascade50 gulp-pug-starter

## Features
* Class naming by [БЭМ](https://en.bem.info/)
* BEM structure is used
* preprocessors are used [Pug](https://pugjs.org/) and [SCSS](https://sass-lang.com/)
* uses a transpiler [Babel](https://babeljs.io/) to support modern JavaScript (ES6) in browsers
* uses [Webpack](https://webpack.js.org/) to build JavaScript modules
* uses [Bootstrap 4](https://getbootstrap.com/) SCSS version
* hard code guide is used

## Installation
* install [NodeJS](https://nodejs.org/en/) (if required) and [Yarn](https://yarnpkg.com/en/docs/install)
* download this repository by terminal [Git](https://git-scm.com/downloads): ```git clone https://github.com/Kry-dev/cascade50.github.io```
* install ```gulp``` global: ```yarn global add gulp-cli```
* go to the downloaded folder with project: ```cd cascade50```
* download the necessary dependencies: ```yarn```
* enter the command to get started: ```yarn run dev``` (development mode)
* enter the command to build the project ```yarn run build``` (build mode)

If you did everything correctly, the browser with the local server should open.
Build mode involves optimizing the project: compressing images, minifying CSS and JS files for upload to the server.

## file structure

```
Cascade50 gulp-pug-starter
├── dist
├── gulp-tasks
├── src
│   ├── blocks
│   ├── fonts
│   ├── img
│   ├── js
│   ├── styles
│   ├── views
│   └── .htaccess
├── gulpfile.babel.js
├── webpack.config.js
├── package.json
├── .babelrc.js
├── .bemrc.js
├── .eslintrc.json
├── .stylelintrc
├── .stylelintignore
└── .gitignore
```

* Folder root:
    * ```.babelrc.js``` — Babel settings
    * ```.bemrc.js``` — BEM settings
    * ```.eslintrc.json``` — ESLint settings
    * ```.gitignore``` – Git file tracking ignore
    * ```.stylelintrc``` — Stylelint settings
    * ```.stylelintignore``` – Stylelint file tracking ignore
    * ```gulpfile.babel.js``` — Gulp settings
    * ```webpack.config.js``` — Webpack settings
    * ```package.json``` — dependency list
* folder ```src``` - used during development:
    * BEM-blocks and components: ```src/blocks```
    * fonts: ```src/fonts```
    * images: ```src/img```
    * JS-files: ```src/js```
    * site pages: ```src/views/pages```
    * SCSS-files: ```src/styles```
    * service Pug-files: ```src/views```
    * Apache web server configuration file with settings [gzip](https://habr.com/ru/post/221849/) (lossless compression): ```src/.htaccess```
* Folder ```dist``` - the folder from which the local server for development is launched (when ```yarn run dev``` starts)
* Folder ```gulp-tasks``` - folder with Gulp-tasks

## Commands
* ```yarn run lint:style``` - check SCSS-files. For VSCode needs to install [плагин](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint). For WebStorm 
or PHPStorm needs turn on Stylelint in ```Languages & Frameworks - Style Sheets - Stylelint``` (errors will be fixed automatically when saving the file)
* ```yarn run lint:style --fix``` - fix SCSS file errors
* ```yarn run dev``` - launching a server for project development
* ```yarn run build``` - build a project with optimization without starting the server
* ```yarn run build views``` - compile Pug-files
* ```yarn run build styles``` - compile SCSS-files
* ```yarn run build scripts``` - compile JS-files
* ```yarn run build images``` - build images
* ```yarn run build webp``` - convert images to ```.webp```
* ```yarn run build sprites```- build sprites
* ```yarn run build fonts``` - build fonts
* ```yarn run build favicons``` - build favicons
* ```yarn run build gzip``` - build Apache configuration

## Рекомендации по использованию
### Компонентный подход к разработке сайтов
* каждый БЭМ-блок имеет свою папку внутри ```src/blocks/modules```
* папка одного БЭМ-блока содержит в себе один Pug-файл, один SCSS-файл и один JS-файл (если у блока используется скрипт)
    * Pug-файл блока импортируется в файл ```src/views/index.pug``` (или в необходимый файл страницы, откуда будет вызываться блок)
    * SCSS-файл блока импортируется в файл ```src/blocks/modules/_modules.scss```
    * JS-файл блока импортируется в ```src/js/import/modules.js```

Пример структуры папки с БЭМ-блоком:
```
blocks
├── modules
│   ├── header
│   │   ├── header.pug
│   │   ├── header.js
│   │   ├── header.scss
```
Чтобы вручную не создавать соответствующие папку и файлы, достаточно в консоли прописать следующие команды: 
* ```bem create my-block``` - для создания папки БЭМ-блока, где ```my-block``` - имя БЭМ-блока
* ```bem create my-component -l src/blocks/components``` для создания компонента
* ```bem create my-component -l src/blocks/components && bem create my-block``` - создать всё вместе

### Компоненты
* компоненты (например, иконки, кнопки) оформляются в Pug с помощью примесей
* каждый компонент имеет свою папку внутри ```src/blocks/components```
* папка одного компонента содержит в себе один Pug-файл, один SCSS-файл и один JS-файл (если у компонента используется скрипт)
    * Pug-файл компонента импортируется в файл главной страницы ```src/views/index.pug``` (или в необходимый файл страницы, откуда будет вызываться компонент)
    * SCSS-файл компонента импортируется в файл ```src/blocks/components/_components.scss```
    * JS-файл компонента импортируется в файл ```src/js/import/components.js```

### Страницы проекта
* страницы проекта находятся в папке ```src/views/pages```
    * каждая страница (в том числе главная) наследует шаблон ```src/views/layouts/default.pug```
    * главная страница: ```src/views/index.pug```

### Шрифты
* шрифты находятся в папке ```src/fonts```
    * используйте [форматы](https://caniuse.com/#search=woff) ```.woff``` и ```.woff2```
    * шрифты подключаются в файл ```src/styles/base/_fonts.scss```
    * сконвертировать локальные шрифты можно с помощью [данного сервиса](https://onlinefontconverter.com/)

### Изображения 
* изображения находятся в папке ```src/img```
    * изображение для генерации фавиконок должно находиться в папке ```src/img/favicon``` и иметь размер не менее ```1024px x 1024px```
    * изображения автоматически конвертируются в формат ```.webp```. Подробная информация по использованию [тут](https://vk.com/@vk_it-webp).

### Сторонние библиотеки
* все сторонние библиотеки устанавливаются в папку ```node_modules```
    * для их загрузки воспользуйтеcь командой ```yarn add package_name```
    * для подключения JS-файлов библиотек импортируйте их в самом начале JS-файла БЭМ-блока (то есть тот БЭМ-блок, который использует скрипт), например: 
    ```javascript 
    import $ from "jquery";
    ```
    * для подключения стилевых файлов библиотек импортируйте их в файл ```src/styles/vendor/_libs.scss```
    * JS-файлы и стилевые файлы библиотек самостоятельно изменять нельзя

:warning: Если в вашем проекте используется несколько библиотек, которые необходимо подключать на нескольких страницах, во избежании ошибок нужно: 
* по пути ```src/js/import``` создать папку ```pages```
* в папке ```pages``` создать js-файл для страницы, например, ```pageA.js```, и импортировать туда библиотеку, которая будет использоваться только на этой странице
    * аналогично проделать шаг для дополнительных страниц
* в файле ```webpack.config.js``` в точку входа добавить js-файлы страниц, пример:
```javascript 
entry: {
    main: "./src/js/index.js",
    pageA: "./src/js/import/pages/pageA.js",
    pageB: "./src/js/import/pages/pageB.js"
}
```
* подключить скомпилированные js-файлы на необходимых страницах 

