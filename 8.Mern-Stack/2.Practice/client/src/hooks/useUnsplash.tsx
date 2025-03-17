import { UnsplashResponse } from "../types/unsplash";

const useUnsplash = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const unsplashImageReponseFormatter = (data: any) => {
    return data.map((image: UnsplashResponse) => {
      return {
        id: image.id,
        alt_description: image.alt_description,
        description: image.alt_description,
        height: image.height,
        urls: {
          small: image.urls.small,
          full: image.urls.full,
          regular: image.urls.regular,
          thumb: image.urls.thumb,
          small_s3: image.urls.small_s3,
          raw: image.urls.raw,
        },
      };
    });
  };
  return {
    unsplashImageReponseFormatter,
  };
};

export default useUnsplash;
