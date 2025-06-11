import { Metadata } from "next";

type Props = {
  params: { productId: string };
};

export const generateMetadata = async ({
  params,
}: {
  params: { productId: string };
}): Promise<Metadata> => {
  const id = params.productId;
  // Simulate async title fetching
  const title = await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(`Product ${id} Details`);
    }, 1000);
  });

  return {
    title,
    description: `Details of product with ID ${id}`,
  };
};

export default async function ProductDetails({ params }: Props) {
  const productId = params.productId;
  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {productId}</p>
    </div>
  );
}
