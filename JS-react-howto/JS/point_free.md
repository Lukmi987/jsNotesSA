Styl, který se snaží redukovat vizuální opakování tím, že odstraní nenutné mapování
mezi parametrem a argumentem.

let newBooks = books.filter(book => isNew(book))

---->

let newBooks = books.filter(isNew)
