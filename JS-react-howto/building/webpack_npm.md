Webpack:

1. vezme src/index.js jako určitý root prvek pro všechny ostatní JS soubory a pomocí závislostí
  vytvorí jeden bundled js soubor
2. vezme src/index.html jako root HTML stránku (princip SPA - single page aplication)
3. do index.html souboru vloží odkaz na zbundlovaný js soubor (případně i na zbundlovaný CSS soubor)
4. výsledné HTML i s js a css zbundlovanými soubory dá do složky "dist"

Toto vše je definováno ve webpack.config.js

----

NPM:

npm start - spustí webpack dev SERVER, který pak naservíruje dev files a člověk může vyvíjet (localhost: 8080)

npm build - vytvoří dist files, ale ty nejdou spustit jen tak "nanečisto"
v prohlížeči, je POTŘEBA je deploynout na web server!! (nebo použít v package.json taky webpack-dev server i pro build)
