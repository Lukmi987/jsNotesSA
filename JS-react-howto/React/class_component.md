https://reactjs.org/docs/react-component.html

1. Mounting/Constructor
  - the first thing that gets called is your component constructor,
    if your component is a class component. This does not apply to functional components
  - v konstruktoru se musí zavolat super a předat props, může se initializovat state apod.
  - volání konstruktoru je optional, pokud je používán babel, lze pak přejít rovnou k inicializacím state

  class MyComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: props.initialCounterValue,
      };
    }
  }

  //možno zapsat zkráceně, pokud je v app nastaven babel pro react:
  class MyComponent extends Component {
    state = {
      counter: this.props.initialCounterValue,
    };
  }

2. componentDidMount()
- volá se hned po konstruktoru
- vhodné pro zavolání BE, získání dat atd.

3. render()
- volá se jako třetí po konstruktoru a componentDidMount
- render() will not be invoked if shouldComponentUpdate() returns false

4. componentDidUpdate()
- is invoked immediately after updating occurs
- this method is not called for the initial render

5. shouldComponentUpdate()
- to let React know if a component’s output is not affected by the current change in state or props

6. componentWillUnmount()
- is invoked immediately before a component is unmounted and destroyed
- perform any necessary cleanup in this method
