const categories = [
  {
    name: "Fruits",
    items: ["Apple", "Banana", "Cherry"],
  },

  {
    name: "Vegetables",
    items: ["Carrot", "Broccoli", "Spinach"],
  },
];

const CategoryList = () => {
  return (
    <div className="category-list">
      {categories.map((category) => (
        <div key={category.name} className="category">
          <h3>{category.name}</h3>
          <ul>
            {category.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
