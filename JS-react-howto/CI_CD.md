CI - Continuous Integration (git)

CD - Continuous Delivery (jenkins)


V praxi: programátor pushne kód, nelze jej zamergovat bez review, po mergi spustí
Jenkins testy, eslint a zbuildí aplikaci, poté ji automaticky nasadí na server.
V případě chyby rozešle emaily.
