Error boundaries = komponenta, která má v sobě componentDidCatch a podle toho
buď renderuje fallback jsx nebo svoje children

V případě runtime erroru v react komponentě se celý react tree nevyrenderuje (bílá stránka);

Error boundary odchytí errory ve všech child komponentách a když nastanou,
zobrazí fallback html kód.


class ErrorHandler extends React.Component {
  constructor(props) {
    super(props)
    this.state = { errorOccurred: false }
  }

  componentDidCatch(error, info) {
    this.setState({ errorOccurred: true })
  }

  render() {
    return this.state.errorOccurred ?
      <h1>Something went wrong!</h1>
      :
      this.props.children
  }
}

<ErrorHandler>
  <SomeOtherComponent />
</ErrorHandler>


Není zde žádná hooks alternativa, takže to stále musí být class:

Do Hooks cover all use cases for classes?
Our goal is for Hooks to cover all use cases for classes as soon as possible.
There are no Hook equivalents to the uncommon getSnapshotBeforeUpdate
and componentDidCatch lifecycles yet, but we plan to add them soon.

==> jediný případ kdy použít class componentu místo funkcionální
