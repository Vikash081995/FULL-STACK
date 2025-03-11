import { useState } from "react";
import styles from "./ImageBrain.module.scss";
import searchImages from "../../api/unsplash";
import SearchForm from "../../components/Core/SearchForm/SearchForm";
import UnsplashImageList from "../../components/Core/UnsplashImageList/UnsplashImagList";
import { UnsplashResponse } from "../../types/unsplash";
import useUnsplash from "../../hooks/useUnsplash";

const ImageBrain = () => {
  const [images, setImages] = useState<UnsplashResponse[] | []>([]);
  const { unsplashImageReponseFormatter } = useUnsplash();

  const handleSubmit = async (term: string) => {
    const response = await searchImages(term);
    console.log(response);
    if (response) {
      const formattedResponse = unsplashImageReponseFormatter(response);
      setImages(formattedResponse);
    }
  };

  return (
    <div className={styles.ImageBrain}>
      <div className={styles.searchbox}>
        <h3>Unsplash image Search</h3>
        <SearchForm label="" onSubmit={handleSubmit} />
        <UnsplashImageList images={images} />
      </div>
    </div>
  );
};

export default ImageBrain;
