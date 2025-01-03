import Link from "next/link";

const Homepage = () => {
  return (
    <div>
      <h1 className="text-7xl">HomePage</h1>
      <Link href="/about" className="text-xl text-blue-700 inline-block">About</Link>
    </div>
  );
};

export default Homepage;
