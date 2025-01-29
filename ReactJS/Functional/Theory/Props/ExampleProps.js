// React components use *props* to communicate with each other.Every parent component can pass some information to its child components by giving them props

// Props are the information that you pass to a JSX tag. For example, `className`, `src`, `alt`, `width`, and `height` are some of the props you can pass to an `<img>`

function Avatar(props) {
  return (
    <img
      className="avatar"
      src={props.user.imageUrl}
      alt={"Photo of " + props.user.name}
      style={{
        width: props.user.imageSize,
        height: props.user.imageSize,
      }}
    />
  );
}

