import fs from "fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay for demonstration purposes
  const meals = db.prepare("SELECT * FROM meals").all();
  return meals.map((meal) => ({
    ...meal,
    image: meal.image || "/images/default.jpg", // Fallback image if none provided
  }));
}

export async function getMealbySlug(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extensions = meal.image.split(".").pop();
  const fileName = `${meal.slug}.${extensions}`;
  fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage));
  meal.image = `/images/${fileName}`;
  db.prepare(`
    INSERT INTO meals
    (slug, title, image, summary, instructions, creator, creator_email)
    VALUES(
        @slug,
        @title,
        @image,
        @summary,
        @instructions,
        @creator,
        @creator_email
    )
    `).run(meal)
}
