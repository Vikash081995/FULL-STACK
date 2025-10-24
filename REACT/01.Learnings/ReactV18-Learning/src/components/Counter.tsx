

type counterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: React.ReactNode;
};

const Counter = ({ setCount, children }: counterProps) => {

  return (
    <>
      <h1>{children}</h1>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button type="button" onClick={() => setCount((prev) => prev - 1)}>-</button>
    </>
  );
};
export default Counter;
