// Javascript has a number formatter (part of the Internationalization API).

// Create our number formatter.
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

formatter.format(2500); /* $2,500.00 */


const formatter = new Intl.NumberFormat('cs-CS', {
  style: 'currency',
  currency: 'CZK',
});
