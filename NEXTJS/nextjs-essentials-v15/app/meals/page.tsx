import classes from "./page.module.css";
import { Suspense } from "react";
import Link from "next/link";
import MealsGrid from "../../components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

export const metadata={
  title:'Meals',
  description:'Browse the delicious meals shared by our community '
}
async function Meals() {
  const meal = getMeals();
  return <MealsGrid meals={meal} />;
}

export default async function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious Meals, created
          <span className={classes.highlight}>by</span>
        </h1>
        <p>
          choose your favorite meals from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home. All our meals are
          cooked with high-quality ingredients, just-in-time and of course by
          experienced chefs!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favourite meal</Link>
        </p>
      </header>
      <main className={classes.meals}>
        <Suspense fallback={<p className={classes.loading}>Loading...</p>}  >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
