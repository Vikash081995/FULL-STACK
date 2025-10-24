import Link from "next/link";
import classes from "./page.module.css";
import ImageSlideshow from "@/components/images/image-slideshow";
export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Next level food </h1>
            <p>Taste and share the foods from all over the world </p>
          </div>
        </div>
        <div className={classes.cta}>
          <Link href="/meals" className={classes.button}>
            Explore Meals
          </Link>
          <Link href="/community" className={classes.button}>
            Join Community
          </Link>
        </div>
      </header>
      <main className={classes.main}>
        <section className={classes.features}>
          <h2>Why Choose Next Level Food?</h2>
          <ul>
            <li>
              <strong>Global Cuisine:</strong> Discover recipes and meals from
              every corner of the world.
            </li>
            <li>
              <strong>Community Driven:</strong> Share your own creations and
              connect with food lovers.
            </li>
            <li>
              <strong>Easy to Use:</strong> Simple navigation and beautiful
              design for the best experience.
            </li>
          </ul>
        </section>
        <section className={classes.about}>
          <h2>About Us</h2>
          <p>
            Next Level Food is your gateway to a world of flavors. Whether
            you’re a home cook or a professional chef, our platform helps you
            explore, share, and enjoy amazing meals. Join our community and take
            your taste buds on a global adventure!
          </p>
        </section>
      </main>
    </>
  );
}
