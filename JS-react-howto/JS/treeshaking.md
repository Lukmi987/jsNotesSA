Most bundlers like Webpack offer tree-shaking as a way to drop unused libraries code
 and reduce bundle size, but their performance varies;

For example, you do not have to use "import x from Ramda; import y from Ramda;
import z from Ramda".
You can use "import * as R from Ramda;" and webpack will get rid of parts of Ramda not used in your code.

Není prý tak úplně pravda, knihovna musí být implementována tak, aby to podporovala.
Proto je lepší vždy importovat konkrétně a na tree shaking nespoléhat.
