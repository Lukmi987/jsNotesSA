- react si vytváří vnitřní reprezentaci DOMu ve formě JAVASCRIPTU
- operace v JS jsou mnohem rychlejší než na reálných DOM nodech
- při změně se přerenderuje virtual DOM a do reálného DOMu se změny jen mergnou
- mergnutí změn znamená, že se v reálném DOMu změní jen ten node, který je potřeba, zbytek se nepřekresluje