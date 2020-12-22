Getting a substring
There are 3 methods in JavaScript to get a substring: substring, substr and slice.

Of the other two variants, slice is a little bit more flexible, it allows negative arguments and shorter to write.
So, it’s enough to remember solely slice of these three methods.

Summary
There are 3 types of quotes. Backticks allow a string to span multiple lines and embed expressions ${…}.
Strings in JavaScript are encoded using UTF-16.
We can use special characters like \n and insert letters by their Unicode using \u....
To get a character, use: [].
To get a substring, use: slice or substring.
To lowercase/uppercase a string, use: toLowerCase/toUpperCase.
To look for a substring, use: indexOf, or includes/startsWith/endsWith for simple checks.
To compare strings according to the language, use: localeCompare, otherwise they are compared by character codes.
There are several other helpful methods in strings:

str.trim() – removes (“trims”) spaces from the beginning and end of the string.
str.repeat(n) – repeats the string n times.
…and more to be found in the manual.
