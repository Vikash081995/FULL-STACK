import {Suspense, lazy} from 'react';

const ProductList= lazy(()=>import('./ProductList'));


const LazyLoading = () => {
  return (
    <div>
      <h1>Lazy Loading Example</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductList />
      </Suspense>
    </div>
  );
}

export default LazyLoading;
