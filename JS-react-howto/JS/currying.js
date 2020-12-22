//Currying is a process of taking one function with multiple arguments
//and reworking it to a series of functions with single arguments

//dobré, protože se může volat jen do určité fáze a získat tak část řetězu výsledku

//samo o sobě prakticky useless, ale v rámci functionálního programování usnadňuje
//práci a použití jiných konceptů - lehčí vytváření anonymních funkcí, mappingu, filtrování

function volume(l, w, h) {
  return l * w * h;
}
volume(2, 3, 4); // 24

function curriedVolume(length) {
  return function(width) {
    return function(height) {
      return height * width * length;
    }
  }
}
curriedVolume(2)(3)(4); // 24
