 https://reactjs.org/docs/higher-order-components.html

 Higher-order component is a function that takes a component and returns a new component:
 const EnhancedComponent = higherOrderComponent(WrappedComponent);


-------

const BlogPostWithSubscription = withSubscription(
  BlogPost,
  (DataSource, props) => DataSource.getBlogPost(props.id)
);

function withSubscription(WrappedComponent, selectData) {
  return class extends React.Component {

      //(some operations, data enrichment, subcriptions, lifecycles...)

      ...

      render() {
        return <WrappedComponent data={this.state.data} {...this.props} />;
      }

    }

--------

withRouter přidá do komponenty do props history, na které se dá udělat push(/cesta),
pokud tam není
