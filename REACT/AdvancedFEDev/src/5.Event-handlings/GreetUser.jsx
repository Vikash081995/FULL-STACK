const greetUser = (name) => {
  console.log(`Hello, ${name}!`);
};

export default function GreetUser() {
  return (
    <div>
      <button onClick={() => greetUser("John")}>Greet</button>
    </div>
  );
}
