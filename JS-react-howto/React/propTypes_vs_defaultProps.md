propTypes:
- type checking in React, light alternative to typescript or flow (two typechecking supersets of JS)
- it can catch bugs early, by preventing silly mistakes
- if you use isRequired, then you don't need to check for undefined or null as often
- it acts as documentation


Greeting.propTypes = {
  name: PropTypes.string
};

-----

defaultProps:
- specifikují defaultní hodnoty pro props
- mohou být také definovány jako static a uvnitř react componenty

Greeting.defaultProps = {
  name: 'Stranger'
};

nebo:

class Greeting extends React.Component {
  static defaultProps = {
    name: 'stranger'
  }
  ...
}

----

The propTypes typechecking happens after defaultProps are resolved, so typechecking will also apply to the defaultProps.

======================
