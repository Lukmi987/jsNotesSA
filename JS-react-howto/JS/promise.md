Dvě možnosti vytvoření:

1.
return new Promise((resolve, reject) => {
  if (something) {
    resolve();
  }
  else {
    reject();
  }
}

-----

2.
return Promise.resolve(27);
return Promise.reject();

=================================================

Promise.all - čeká na splnění všech promisů, ale ty se mohou volat a ukončit náhodně.
Promise.race - čeká na ukončení prvního promisu
