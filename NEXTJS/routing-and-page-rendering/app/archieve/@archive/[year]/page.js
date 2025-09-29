import NewsList from "@/commponents/news-list";
import { DUMMY_NEWS } from "@/dummy-data";
import { getNewsForYear } from "@/app/lib/news";

export default function FilteredNewsPage({ params }) {
  const newsYear = params.year;
  const news = getNewsForYear(newsYear);

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}
