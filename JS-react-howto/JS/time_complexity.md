Time complexity
- the amount of time taken by an algorithm to run

Space complexity
-  the amount of space or memory taken by an algorithm to run

Big O notation
- jak rychle roste časová náročnost algoritmu vzhledem k rostoucímu inputu
- how quickly the runtime grows based on a growing input

Constant Time
- O(1)
- bez ohledu na velikost inputu, algoritmus vykonává stále stejný počet operací
- nejlepší možnost

  function print(arr) { //bez ohledu na velikost pole, vždy jen jeden výtisk prvního prvku
    console.log(arr[0]);
  }

Linear Time
- O(n)
- počet operací roste úměrně k velikosti inputu

  function print(arr) { //1 prvek v poli - jedna operace, tisíc prvků - tisíc operací
    arr.forEach(item => { console.log (item) })
  }

Quadratic Time
- O(N2)
- pokud input vzroste o 1, počet operací vzroste o více než 1
- např. hlubší cykly, potřeba procházet pole dvakrát nebo víckrát

  function print(arr) {
    arr.forEach(item => {
      console.log (item.name);
    });
    arr.forEach(item => {
      console.log (item.content);
    });
  }

Logarithmic Time
- O(log n)
- pokud input vzroste o 1, počet operací vzroste o méně než 1
- např. půlení

-----

Půlení:
- místo porovnávání jednoho prvku se všemi ostatními prvky se
  při každé iteraci rozdělí data na půlku (log base 2) a pracuje se už jen s
  jednou půlkou, při další iteraci jen s půlkou půlky atd. (tzv. "půlení");
- milion elementů tak lze prohledat za 20 iterací
- většinou žádoucí stav pro vyhledávání ve velkých kolekcích dat (Big Data),
  search algoritmy (např. quicksort)
