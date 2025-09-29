"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/images/food1.jpg",
  "/images/food2.jpg",
  "/images/food3.jpg",
];

export default function ImageSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "250px", overflow: "hidden" }}>
      {images.map((src, idx) => (
        <Image
          key={src}
          src={src}
          alt={`Slideshow ${idx + 1}`}
          fill
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            objectFit: "cover",
            opacity: idx === current ? 1 : 0,
            transition: "opacity 0.8s ease",
          }}
          sizes="100vw"
          priority={idx === 0}
        />
      ))}
    </div>
  );
}