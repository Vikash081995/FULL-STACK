import Link from 'next/link';

export default function MealItem({ meal }) {
  return (
    <li>
      <h2>{meal.title}</h2>
      <div>
        <span>${meal.price.toFixed(2)}</span>
      </div>
      <p>{meal.description}</p>
      <Link href={`/meals/${slug}`}>view Details </Link>
    </li>
  );
}