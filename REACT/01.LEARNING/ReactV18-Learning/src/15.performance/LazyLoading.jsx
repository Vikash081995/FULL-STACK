import { lazy, Suspense } from "react";

const ProductDetails = lazy(() => import("./ProductDetails"));

const DummyApp = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/products/:productId" element={<ProductDetails />} />
      </Routes>
    </Suspense>
  );
};

export default DummyApp;
