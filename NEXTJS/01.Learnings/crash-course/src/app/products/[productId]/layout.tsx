import React from "react";

const ProductDetailLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <h2>Featured Products</h2>
    </div>
  );
};

export default ProductDetailLayout;
