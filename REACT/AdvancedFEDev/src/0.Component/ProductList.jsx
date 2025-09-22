const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
};

function ShoppingCartPage() {
  const products = [
    { id: 1, name: "Laptop", price: 1000 },

    { id: 2, name: "Phone", price: 500 },
  ];

  return <ProductList products={products} />;
}
