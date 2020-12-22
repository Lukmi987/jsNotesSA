The Container Pattern is a solution to separate the view from the controller.

Instead of doing only one <Component /> with the logic and the view, you separate it in two:
 <ComponentContainer /> and <Component />.

 The former will do all the logical operations needed and promote communication
 with the business while the latter will be a dummy presentational component
 that will render whatever his parent Container demands.

Presentational components are concerned with how things look. While Container
components are concerned with how things work.

https://www.freecodecamp.org/news/react-superpowers-container-pattern-20d664bdae65/


Dva možné pojmy:
- oddělení react componenty or redux containeru, tj. nemít to v jednom souboru
- použití dumb componenty v return, zatímco vše okolo (states, hooks...) jsou container

Pojem číslo dvě se používá jako "Container pattern" více:
https://blog.bitsrc.io/implementing-the-container-pattern-using-react-hooks-f490a8492d05
https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
