import { UnsplashResponse } from "../../../types/unsplash";
import ImageCard from "../../Ui/ImageCard/ImageCard";

type ImageListProps = {
  images: UnsplashResponse[];
};

function UnsplashImageList({ images }: ImageListProps) {
  return (
    <>
      {images.map((image: UnsplashResponse) => {
        return (
          <ImageCard
            key={image.id}
            img={image.urls.small}
            description={image.alt_description}
            title={image.alt_description}
          />
        );
      })}
    </>
  );
}

export default UnsplashImageList;
