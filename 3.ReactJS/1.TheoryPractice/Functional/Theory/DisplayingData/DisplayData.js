// JSX lets you put markup into JavaScript.

// Curly braces let you “escape back” into JavaScript so that you can embed some variable from your code and display it to the user

// return <h1>{user.name}</h1>;
// can also “escape into JavaScript” from JSX attributes, but you have to use curly braces instead of quotes
// return <img className="avatar" src={user.imageUrl} />;
// can put more complex expressions inside the JSX curly braces too
const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

export default function DisplayData() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}
