1. relies on side effects and mutating of outside state

2. its not possible to interrupt, neither return nor break will work

3. returns undefined so eslint will not warn that the result is not used in the code later

4. for Each is more cryptic and less semanting than find, map, some, every, filter, reduce


https://blog.sapegin.me/all/avoid-loops/
http://frontendcollisionblog.com/javascript/2015/08/15/3-reasons-you-should-not-be-using-foreach.html
https://medium.com/front-end-weekly/stop-array-foreach-and-start-using-filter-map-some-reduce-functions-298b4dabfa09
