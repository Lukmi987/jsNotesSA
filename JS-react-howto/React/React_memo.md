Urychluje rendering componenty. Render output of a component is memoized and immediatelly
returned if props did not change.

You gain a performance boost: by reusing the memoized content,
React skips rendering the component and doesn’t perform a virtual DOM difference check.

When to use:
- when a component is frequently rerendered with the same props (for example, when parent component changes a lot,
	but this child component is rendered with the same props)

When deciding to update DOM, React first renders your component, then compares
the result with the previous render result. If the render results are different,
React updates the DOM.

Current vs previous render results comparison is fast. But you can speed up
the process under some circumstances.

When a component is wrapped in React.memo(), React renders the component and
memoizes the result. Before the next render, if the new props are the same,
React reuses the memoized result skipping the next rendering.


const MyComponent = React.memo(function MyComponent(props) {

});
