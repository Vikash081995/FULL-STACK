'use server';
import { saveMeal } from "./meals";
import { redirect } from "next/navigation";

export async function shareMeal(fromData) {

  const mealData = {
    title: fromData.get("title"),
    description: fromData.get("description"),
    image: fromData.get("image"),
  };
  
  console.log('Meal shared:', mealData);
await saveMeal(mealData);
revalidatePath('/meals')
redirect('/meals');

}