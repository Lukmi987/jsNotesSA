Importing:

While you can still use require() and module.exports, we encourage you to use
import and export instead.

==========

Default vs named:

We suggest that you stick to using default imports and exports when a module
only exports a single thing (for example, a component).
That’s what you get when you use export default Button and import Button from './Button'.

https://facebook.github.io/create-react-app/docs/importing-a-component

==> nepoužívat require, ale import/export a když má soubor jednu věc, používat
default export, když více, používat named export (export const x = ()...);
