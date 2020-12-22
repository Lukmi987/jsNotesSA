Místo: from "../../../../../constants/actionTypes"
Dosáhnout: from "constants/actionTypes"

Důvod:
a) jednodušší psaní importů
b) přesunování souborů v projektu nevyžaduje tolik ručního přepisovní cest

Na moduly odkazovat absolutně, uvnitř modulů na sebe odkazovat relativně (např. z containerů na akce a komponenty)
- nejideálnější poměr pro lehce přesunovatelné moduly


Řešení:

a) eslintrc (aby povolil build, neházel error, že nemůže import najít):

"settings": {
 "import/resolver": {
   "node": {
     "paths": ["src"],
     "extensions": [".js", ".jsx", ".ts", ".tsx"]
   }
 },
},

--- eslint bude nyní brát cestu od src, tj. pokud je src/app/something, stačí napsat "app/something"

=================================

b) webpack.common.js (aby dokázal správně buildovat app z importů):

resolve: {
  alias: {
    app: path.resolve(__dirname, 'src/app/'),
    constants: path.resolve(__dirname, 'src/constants'),
    http: path.resolve(__dirname, 'src/http'),
    i18n: path.resolve(__dirname, 'src/i18n'),
    img: path.resolve(__dirname, 'src/img'),
    styles: path.resolve(__dirname, 'src/styles'),
  },
},

--- musí zde být path pro všechny složky pod src, aby se k nim pak dalo dostat, src je defaultní root

=================================

c) package.json - absolute imports for jest testing:

"jest": {
  "moduleDirectories": [
  "node_modules",
  "src"
  ]
},
