import { DUMMY_NEWS } from "@/dummy-news";
import {notFound} from 'next/navigation'

export default function NewsDetail({ params }) {
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.id === newsSlug);

if(!newsItem){
  notFound()
}


  return (
    <div>
      <h1>{newsItem.title}</h1>
      <p>{newsItem.content}</p>
      <h3>{newsItem.date}</h3>
    </div>
  );
}
