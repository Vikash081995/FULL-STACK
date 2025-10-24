import Link from "next/link";

export default function NewsList({ news }) {
  return (
    <ul>
      {news.map((item, index) => (
        <li key={index}>
          <Link href={`/news/${item.id}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}
