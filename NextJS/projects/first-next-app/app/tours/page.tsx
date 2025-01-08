import Link from "next/link";
const url = "http://localhost:3000/api/tours";
type Tour = {
  id: string;
  name: string;
  description: string;
  price: number;
};

const fetchTours = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(url);
  const data: Tour[] = await response.json();
  return data;
};

async function ToursPage() {
  const data = await fetchTours();

  return (
    <section>
      <h1 className="text-3xl mb-4">Tours</h1>
      {data.map((tour: Tour) => {
        return (
          <Link key={tour.id} href={`/tours/${tour.id}`}>
            <h2 key={tour.id}>{tour.name}</h2>
          </Link>
        );
      })}
    </section>
  );
}

export default ToursPage;
