Summary
-Static methods are used for the functionality that belongs to the class "as a whole". It doesn't relate to a conrete class instance.
For example, a method for comparison Article.compare(article1, article2) or a factory method Article.createTodays().
Static properties and methods are inherited.

They are labeled by the word static in class declaration.
Static properties are used when we’d like to store class-level data, also not bound to an instance.
Technically, static declaration is the same as assigning to the class itself:
MyClass.property = ...
MyClass.method = ...


Static properties and methods
We can also assign a method to the class function itself, not to its "prototype". Such methods are called static.
class User {
  static staticMethod() {
    alert(this === User);
  }
}

User.staticMethod(); // true
The same:
class User { }

User.staticMethod = function() {
  alert(this === User);
};

User.staticMethod(); // true
-The value of this in User.staticMethod() call is the class constructor User itself (the “object before dot” rule).
-Usually, static methods are used to implement functions that belong to the class, but not to any particular object of it.

class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static createTodays() {
    // remember, this = Article
    return new this("Today's digest", new Date());
  }
}

let article = Article.createTodays();

alert( article.title ); // Today's digest
Now every time we need to create a today’s digest, we can call Article.createTodays(). Once again, that’s not a method of an article,
but a method of the whole class.
----------------------------------
Static methods are also used in database-related classes to search/save/remove entries from the database, like this:
// assuming Article is a special class for managing articles
// static method to remove the article:
Article.remove({id: 12345});

---------------------------------------------------
Static properties
class Article {
  static publisher = "Ilya Kantor";
}

alert( Article.publisher ); // Ilya Kantor

This is the same as a direct assignment to Article;
Article.publisher = "Ilya Kantor";
-------------------------------------
Inheritance of static properties and methods
Static properties and methods are inherited.
-Now when we call Rabbit.compare, the inherited Animal.compare will be called.
-How does it work? Again, using prototypes. As you might have already guessed, extends gives Rabbit the [[Prototype]] reference to Animal.
So, Rabbit extends Animal creates two [[Prototype]] references:

Rabbit function prototypally inherits from Animal function.
Rabbit.prototype prototypally inherits from Animal.prototype
