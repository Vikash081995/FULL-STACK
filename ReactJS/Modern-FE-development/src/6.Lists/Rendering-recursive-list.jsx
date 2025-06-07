const nestedCategories = [
  {
    name: "Electronics",
    subcategories: [
      { name: "Phones", subcategories: [] },
      {
        name: "Laptops",
        subcategories: [{ name: "Gaming Laptops", subcategories: [] }],
      },
    ],
  },
  {
    name: "Clothing",
    subcategories: [
      { name: "Men", subcategories: [] },
      { name: "Women", subcategories: [] },
    ],
  },
];

const RecursiveCategory = ({ categories }) => {
  return (
    <ul>
      {categories.map((category) => (
        <li key={category.name}>
          {category.name}
          {category.subcategories && category.subcategories.length > 0 && (
            <RecursiveCategory categories={category.subcategories} />
          )}
        </li>
      ))}
    </ul>
  );
};

const App = () => {
  return (
    <div>
      <h2>Categories</h2>
      <RecursiveCategory categories={nestedCategories} />
    </div>
  );
};

export default App;
