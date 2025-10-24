import classes from "./meals-grid.module.css";
import MealItem from "./meal-item";

export default function MealsGrid({ meals }) {
  return (
    <ul className={classes.grid}>
      {meals.map((meal) => {
        return (
          <li key={meal.id}>
            <MealItem meal={meal} />
          </li>
        );
      })}
    </ul>
  );
}
