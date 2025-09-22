const ProductItem = ({ name, price }) => {
  return (
    <div>
      <h4>{name}</h4>
      <p>Price:${price}</p>
    </div>
  );
};

export default ProductItem;
