import { useCallback } from "react";
const ProductList = ({ products }) => {
  const renderProduct = useCallback(
    (product) => <ProductCard key={product.id} product={product} />,
    []
  );

  return <div>{products.map(renderProduct)}</div>;
};
export default ProductList;
