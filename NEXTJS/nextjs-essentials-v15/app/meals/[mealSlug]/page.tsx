import React from "react";
import Image from "next/image";
import { getMealbySlug } from "@/lib/meals";

interface GenerateMetaDataParams {
  params: {
    mealSlug: string;
  };
}

interface MetaData {
  title: string;
  description: string;
}

export async function generateMetaData({ params }: GenerateMetaDataParams): Promise<MetaData> {
  const meal = await getMealbySlug(params.mealSlug);

  return {
    title: meal.title,
    description: meal.summary,
  };
}


export default async function MealDetail({
  params,
}: {
  params: { mealSlug: string };
}) {
  const meal = await getMealbySlug(params.mealSlug);
  const { title, imageUrl, description } = meal;

  return (
    <section
      style={{ padding: "2rem", border: "1px solid #eee", borderRadius: "8px" }}
    >
      <h2>{title}</h2>
      {imageUrl && (
        <Image src={imageUrl} alt={title} width={600} height={400} />
      )}
      <p>{description}</p>
    </section>
  );
}
