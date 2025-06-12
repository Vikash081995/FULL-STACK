import Link from "next/link";

export default function F1() {
  return (
    <>
      <h1>h1 page</h1>
      <div>
        <Link href={"/f1/f2"}>F2 Page</Link>
        <link href={"/f3"}>F3 Page</link>
      </div>
    </>
  );
}
