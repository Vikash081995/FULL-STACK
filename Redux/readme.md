## Introducing Layered Architecture in React

As React applications grow in size and complexity, managing code efficiently becomes a challenge. The linear growth of features can lead to an exponential increase in complexity, making the code base difficult to understand, test, and maintain. Enter **Layered Architecture**, a design approach that’s not just confined to backend systems but is equally beneficial for client-side applications.

Structuring your React application in a layered manner solves several key problems:

- **Separation of concerns**: Different layers handle different responsibilities, making the code base easier to navigate and understand
- **Reusability**: Business logic and data models become easily reusable across different parts of the application
- **Testability**: A layered architecture makes it simpler to write unit and integration tests, leading to a more robust application
- **Maintainability**: As the application scales, making changes or adding features becomes significantly easier when following a layered structure

In this chapter, we will explore the concept of layered architecture in the context of a React application, delving into the extraction of application concern layers, defining precise data models, and illustrating the use of strategy patterns. Through a step-by-step example, we’ll see how to practically implement these concepts and why they are indispensable for large-scale applications.

In this chapter, we will cover the following topics:

- Understanding the evolution of a React application
- Enhancing the Code Oven application
- Implementing the ShoppingCart component
- Delving into layered architecture

## Technical requirements

A GitHub repository has been created to host all the code we discuss in the book. For this chapter, you can find the recommended structure at [https://github.com/PacktPublishing/React-Anti-Patterns/tree/main/code/src/ch11](https://github.com/PacktPublishing/React-Anti-Patterns/tree/main/code/src/ch11).

## Understanding the evolution of a React application

Applications with different sizes require different strategies. For small or one-off projects, you might find that all logic is just written inside React components. You may see one or only a few components in total. The code looks pretty much like HTML, with only some variables or states used to make the page “dynamic,” but overall, the code is easy to understand and change.

As the application grows, and more and more code is added to the code base, without a proper way to organize it, the code base will soon get into an unmaintainable state. This means that even adding small features will be time-consuming as developers need more time to read the code.

In this section, I’ll list several different ways we can structure our React application to make sure our code always remains in a healthy state, making it effortless to add new features and easy to extend or fix existing defects. We’ll start with a simple structure and gradually evolve it to handle scale problems. Let’s have a quick review of the steps to build frontend applications that scale.

## Single-component applications

To start, let’s talk about the simplest possible approach to writing a React application – a single-component application.

![Figure 11.1: Single-component application](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781805123972/files/image/B31103_11_01.jpg)

Figure 11.1: Single-component application

The mono-component undertakes a variety of tasks, ranging from fetching data from a remote server, managing its internal state, and handling domain logic, to rendering. This approach may be suitable for small applications with a single form or for those looking to understand the process of transitioning their application from another framework to React.

However, you’ll soon realize that consolidating everything into a single component can make the code difficult to understand and manage. Everything being housed in one component can quickly become overwhelming, particularly when dealing with logic such as iterating over item lists to create individual components. This complexity highlights the need to decompose the mono-component into smaller, responsibility-focused components.

## Multiple-component applications

Deciding to split the component into several components, with these structures reflecting what’s happening on the resulting HTML, is a good idea and it helps you to focus on one component at a time.

![Figure 11.2: Multiple-component application](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781805123972/files/image/B31103_11_02.jpg)

Figure 11.2: Multiple-component application

Essentially, you’ll transition from a monolithic component to multiple components, each with a specific purpose. For example, one component may be dedicated to rendering a list, another to rendering a list item, and another solely for fetching data and passing data down to its children.

It’s better to have clear responsibilities. However, as your application expands, responsibilities extend beyond the view layer to include tasks such as sending network requests, reshaping data for the view to consume, and collecting data to send back to the server. Additionally, there might be logic to transform data once it’s fetched. Housing this calculation logic within views doesn’t seem appropriate as it’s not directly related to user interfaces. Moreover, some components may become cluttered with excessive internal states.

## State management with Hooks

It’s a better idea to split this logic into separate places. Luckily, in React, you can define your own Hooks. This is a great way to share this state and the logic whenever state changes.

![Figure 11.3: State management with Hooks](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781805123972/files/image/B31103_11_03.jpg)

Figure 11.3: State management with Hooks

Now you have a bunch of elements extracted from components. You have a few pure presentational components, some reusable Hooks that make other components stateful, and some container components (for data fetching, for example).

At this stage, it’s common to find calculations scattered across views, Hooks, or various utility functions. The lack of structure can make further modifications quite challenging and prone to errors. For instance, if you’ve fetched some data for rendering, but the data schema differs in views, you’ll need to transform the data. However, the location for placing this transforming logic may not be clear.

## Extracting business models

So, you’ve started to become aware that extracting this logic into yet another place can bring you many benefits. For example, with that split, the logic can be cohesive and independent of any views. Then, you extract a few domain objects.

These simple objects can handle data mapping (from one format to another), check nulls, and use fallback values as required. As the amount of these domain objects grows, you will find you need some inheritance or polymorphism to make things even cleaner. Thus you apply many design patterns you find helpful from other places to the frontend application:

![Figure 11.4: Extracting business models](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781805123972/files/image/B31103_11_04.jpg)

Figure 11.4: Extracting business models

Now, your code base has expanded with more elements, each having a clear boundary regarding their responsibilities. Hooks are employed for state management, while domain objects represent domain concepts, such as a user object encompassing an avatar, or a **PaymentMethod** object representing the details of a payment method.

As we segregate different elements from the views, the code base scales accordingly. Eventually, it reaches a point where we need to structure the application to respond to changes more efficiently.

## Layered frontend application

As the application continues to evolve, certain patterns begin to emerge. You’ll notice a collection of objects that don’t belong to any user interface, and they remain indifferent to whether the underlying data originates from a remote service, local storage, or cache. Consequently, you’ll want to segregate them into distinct layers. We’ll need to introduce a better approach for these different parts of the application.

![Figure 11.5: Layered frontend application](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781805123972/files/image/B31103_11_05.jpg)

Figure 11.5: Layered frontend application

As illustrated in *Figure 11**.5*, we can allocate different parts to separate folders, each distinctly and physically isolated from the others. This way, if there’s a need to modify models, you won’t need to navigate through the views folder, and vice versa.

That was a high-level overview of the evolution process, and you should have a taste of how you should structure your code or at least what the direction should be. In larger-scale applications, you’ll likely encounter a variety of modules and functions, each tailored to different aspects of the app. This could include a request module for handling network requests, or adapters designed to interface with various data vendors, such as Google’s login API or payment gateway clients.

However, there will be many details, such as how to define a model, how to access a model from views or Hooks, and so on. You need to consider this before applying the theory to your application.

Read more

You can find a detailed explanation of Presentation Domain Data Layering here: [https://martinfowler.com/bliki/PresentationDomainDataLayering.html](https://martinfowler.com/bliki/PresentationDomainDataLayering.html).

In the following sections, I’ll guide you through expanding the Code Oven application we introduced in [*Chapter 7*](https://learning.oreilly.com/library/view/react-anti-patterns/9781805123972/B21103_07.xhtml#_idTextAnchor176), to showcase essential patterns and design principles for large frontend applications.

## Enhancing the Code Oven application

Recall that at the end of [*Chapter 7*](https://learning.oreilly.com/library/view/react-anti-patterns/9781805123972/B21103_07.xhtml#_idTextAnchor176), we developed the basic structure of a pizza store application named Code Oven, leveraging test-driven development to establish a solid foundation for the app.

![Figure 11.6: The Code Oven application](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781805123972/files/image/B31103_11_06.jpg)

Figure 11.6: The Code Oven application

Note

Remember that we employed the design mockup as a guide, not to implement all the details exhaustively. The primary goal remains to illustrate how to refactor the code while preserving its maintainability.

Although we didn’t delve much into feature implementation in that chapter, in this chapter, we’ll extend our setup further. We’ll explore how different architectural types can assist us in managing complexity.

As a refresher, by the end of [*Chapter 7*](https://learning.oreilly.com/library/view/react-anti-patterns/9781805123972/B21103_07.xhtml#_idTextAnchor176), our structure looked like this:

```source
export function PizzaShopApp() {
  const [cartItems, setCartItems] = useState<string[]>([]);
  const addItem = (item: string) => {
    setCartItems([...cartItems, item]);
  };
  return (
    <>
      <h1>The Code Oven</h1>
      <MenuList onAddMenuItem={addItem} />
      <ShoppingCart cartItems={cartItems} />
    </>
  );
}
```

And we assumed the data to be in this shape:

```source
const pizzas = [
  "Margherita Pizza",
  "Pepperoni Pizza",
  "Veggie Supreme Pizza"
];
```

While this setup allows consumers to browse what the restaurant offers, it would be significantly more useful if we enabled online ordering. However, one immediate issue is that the pizzas lack prices and descriptions, crucial for supporting online orders. Descriptions are also vital as they list the ingredients, informing consumers of what’s included.

Saying that, it’s actually not practical to define menu data within the JavaScript code. Typically, we’d have a service hosting such data, providing more detailed information.

To show this, suppose we have data hosted on the [https://api.code-oven.com/menus](https://api.code-oven.com/menus) remote service, defined as follows:

```source
[
  {
    "id": "p1",
    "name": "Margherita Pizza",
    "price": 10.99,
    "description": "Classic pizza with tomato sauce and mozzarella",
    "ingredients": ["Tomato Sauce", "Mozzarella Cheese", "Basil", 
     "Olive Oil"],
    "allergyTags": ["Dairy"],
    "calories": 250,
    "category": "Pizza"
  },
  //...
]
```

To bridge the gap between our app and this data, we need to define a type for the remote data, like so:

```source
type RemoteMenuItem = {
  id: string;
  name: string;
  price: number;
  description: string;
  ingredients: string[];
  allergyTags: string[];
  category: string;
  calories: number
}
```

Now, to integrate this remote menu data, we’ll utilize **useEffect** to fetch the data, and then display the items once fetched. We’ll make these changes within the **MenuList** component:

```source
const MenuList = ({
  onAddMenuItem,
}: {
  onAddMenuItem: (item: string) => void;
}) => {
  const [menuItems, setMenuItems] = useState<string[]>([]);
  useEffect(() => {
    const fetchMenuItems = async () => {
      const result = await fetch('https://api.code-oven.com/menus');
      const menuItems = await result.json();
      setMenuItems(menuItems.map((item: RemoteMenuItem) => item.
       name));
    }
    fetchMenuItems();
  }, [])
  return (
    <div data-testid="menu-list">
      <ol>
        {menuItems.map((item) => (
          <li key={item}>
            {item}
            <button onClick={() => onAddMenuItem(item)}>Add</button>
          </li>
        ))}
      </ol>
    </div>
  );
};
```

Here, the **MenuList** component fetches a list of menu items from an external API upon the initial render and displays this list. Each item comes with an **Add** button, and clicking this button triggers the **onAddMenuItem** function, passed as a prop to **MenuList**, with the item name as its argument.

By mapping **RemoteMenuItem** to a string after fetching the data, we ensure our tests continue to pass.

Now, we aim to reveal the price and display the ingredients from the data to the UI components. However, given the potentially long list of ingredients, we’ll only show the first three to avoid occupying too much screen space. Also, we want to use lowercase **category** and rename it to **type**.

Initially, we define a new type to better structure our data:

```source
type MenuItem = {
  id: string;
  name: string;
  price: number;
  ingredients: string[];
  type: string;
}
```

Here, the **MenuItem** type includes the item’s **id**, **name**, **price**, **ingredients**, and **type** properties.

Now, it’s time to update our **MenuList** component to use this new type:

```source
const MenuList = ({
  onAddMenuItem,
}: {
  onAddMenuItem: (item: string) => void;
}) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  useEffect(() => {
    const fetchMenuItems = async () => {
      const result = await fetch("http://api.code-oven.com/menus");
      const menuItems = await result.json();
      setMenuItems(
        menuItems.map((item: RemoteMenuItem) => {
          return {
            id: item.id,
            name: item.name,
            price: item.price,
            type: item.category.toUpperCase(),
            ingredients: item.ingredients.slice(0, 3),
          };
        })
      );
    };
    fetchMenuItems();
  }, []);
  return (
    <div data-testid="menu-list">
      <ol>
        {menuItems.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <span>${item.price}</span>
            <div>
              {item.ingredients.map((ingredient) => (
                <span>{ingredient}</span>
              ))}
            </div>
            <button onClick={() => onAddMenuItem(item.name)}>Add
             </button>
          </li>
        ))}
      </ol>
    </div>
  );
};
```

In the **MenuList** component, we’ve now made use of the **MenuItem** type in our **useState** Hook. The **fetchMenuItems** function, triggered within **useEffect**, reaches out to the API, fetches the menu items, and maps over them to transform the data into the desired **MenuItem** format. This transformation includes retaining only the first three items from the **ingredients** array for each item.

Each **MenuItem** component is then rendered as a list item within the component. We display the item’s name, price, and iterate over the **ingredients** array to render each ingredient.

While the code is functional, there’s a concern: we’ve intertwined network requests, data mapping, and rendering logic within a single component. It’s a sound practice to separate view-related code from non-view code, ensuring cleaner, more maintainable code.

## Refactoring the MenuList through a custom Hook

We’re no strangers to using custom Hooks for data fetching – it’s a practice that enhances readability and organizes logic neatly. In our scenario, extracting the **menuItems** state and the fetching logic into a separate Hook will declutter the **MenuList** component.

So, let’s create a Hook named **useMenuItems**:

```source
const useMenuItems = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  useEffect(() => {
    const fetchMenuItems = async () => {
      const result = await fetch(
        "https://api.code-oven.com/menus"
      );
      const menuItems = await result.json();
      setMenuItems(
        menuItems.map((item: RemoteMenuItem) => {
          // ... transform RemoteMenuItem to MenuItem
        })
      );
    };
    fetchMenuItems();
  }, []);
  return { menuItems };
};
```

Within the **useMenuItems** Hook, we initialize the **menuItems** state with an empty array. When the Hook mounts, it triggers the **fetchMenuItems** function that fetches data from the specified URL. Following the fetch, a mapping operation is performed to convert each **RemoteMenuItem** object to a **MenuItem** object. The transformation details are omitted here, but it’s where we adapt the fetched data to the desired format. Subsequently, the transformed menu items are set to the **menuItems** state.

Now, in our **MenuList** component, we can simply call **useMenuItems** to obtain the **menuItems** array:

```source
const MenuList = ({
  onAddMenuItem,
}: {
  onAddMenuItem: (item: string) => void;
}) => {
  const { menuItems } = useMenuItems();
  //...
}
```

This refactoring is quite beneficial, redirecting **MenuList** back to a streamlined state and reinstating its single responsibility. However, when we shift our focus to the **useMenuItems** Hook, particularly the data mapping segment, a few operations occur. It fetches data and trims off some unused fields such as **description** and **calories** from the remote data. It also encapsulates the logic to retain only the first three ingredients. Ideally, we’d like to centralize this transformation logic into a common location, ensuring a tidy and manageable code structure.

## Transitioning to a class-based model

As touched upon in [*Chapter 8*](https://learning.oreilly.com/library/view/react-anti-patterns/9781805123972/B21103_08.xhtml#_idTextAnchor212), employing the **Anti-Corruption Layer** (**ACL**) pattern can be a strategic move for managing our data effectively. We’ll employ classes in TypeScript to encapsulate data and logic in a unified location, referred to as a model. A significant step in this direction would be transitioning our **MenuItem** type definition into a class, hence centralizing all mapping logic within this class. This setup will serve as a dedicated hub for any future data shape alterations and related logic.

Transitioning **MenuItem** from a type to a class is straightforward. We require a constructor to accept **RemoteMenuItem** and some getter functions to access the data:

```source
export class MenuItem {
  private readonly _id: string;
  private readonly _name: string;
  private readonly _type: string;
  private readonly _price: number;
  private readonly _ingredients: string[];
  constructor(item: RemoteMenuItem) {
    this._id = item.id;
    this._name = item.name;
    this._price = item.price;
    this._type = item.category;
    this._ingredients = item.ingredients;
  }
  // ... getter functions for id, name, price just returns the private 
          fields
  get type() {
    return this._type.toLowerCase();
  }
  get ingredients() {
    return this._ingredients.slice(0, 3);
  }
}
```

In the **MenuItem** class, we define private **readonly** properties for **id**, **name**, **type**, **price**, and **ingredients**. The constructor initializes these properties using values from a **RemoteMenuItem** object passed to it. We then have getter methods for each property to provide read-only access to their values. Particularly, the **ingredients** getter returns only the first three items from the **ingredients** array.

Though, at a glance, this setup seems to have more code compared to a simple type definition, it effectively encapsulates the data and exposes it in a controlled manner. This aligns with the principles of immutability and encapsulation. The class structure’s beauty is its capability to house behaviors – in our case, the slicing logic for ingredients is tucked neatly within the class.

With this new class in place, our **useMenuItems** Hook becomes more streamlined:

```source
export const useMenuItems = () => {
  //...
  useEffect(() => {
    const fetchMenuItems = async () => {
      //...
      setMenuItems(
        menuItems.map((item: RemoteMenuItem) => {
          return new MenuItem(item);
        })
      );
    };
    fetchMenuItems();
  }, []);
  return { menuItems };
};
```

Now, the **useMenuItems** Hook merely maps over the fetched menu items, creating a new instance of **MenuItem** for each, which significantly tidies up the transformation logic previously housed within the Hook.

### The benefits of a class-based model

Transitioning to a class-based model from a simple type comes with a set of advantages that could serve our application well in the long run:

- **Encapsulation**: A class brings related properties and methods under one roof, thus promoting clear structure and organization. It also restricts direct data access, fostering better control and data integrity.
- **Method behavior**: For complex behaviors or operations associated with a menu item, a class provides a structured platform to define these methods, whether they relate to data manipulation or other business logic.
- **Inheritance and polymorphism**: In the case of a hierarchy or polymorphic behavior among menu items, a class structure is indispensable. It allows different menu item types to inherit from a common base class, overriding or extending behavior as needed.
- **Consistent interface**: Classes ensure a consistent interface to the data, which is invaluable when multiple application parts interact with menu items.
- **Read-only properties**: Classes enable the definition of read-only properties, thereby controlling data mutation. This is a crucial aspect of maintaining data integrity and working with immutable data structures.

Now, as we transition into expanding our application’s functionality with a shopping cart, it’s crucial to approach this new section with the lessons learned from our data modeling exercise. This will ensure a structured and effective implementation, paving the way for a user-friendly online ordering experience.

## Implementing the ShoppingCart component

As we venture into the implementation of the **ShoppingCart** component, we will aim to provide a seamless interface for users to review their selected items before proceeding to the checkout. Besides displaying the items, we also intend to reward our customers with some appealing discount policies.

In [*Chapter 7*](https://learning.oreilly.com/library/view/react-anti-patterns/9781805123972/B21103_07.xhtml#_idTextAnchor176), we defined a rudimentary **ShoppingCart** component, as shown here:

```source
export const ShoppingCart = ({ cartItems }: { cartItems: string[] }) => {
  return (
    <div data-testid="shopping-cart">
      <ol>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
      <button disabled={cartItems.length === 0}>Place My Order
       </button>
    </div>
  );
};
```

The **ShoppingCart** component accepts a **cartItems** prop, which is an array of strings. It returns a **div** tag containing an ordered list (**<ol>**), where each item in the **cartItems** array is rendered as a list item (**<li>**). Below the list, a **Place My Order** button is rendered, which is disabled if the **cartItems** array is empty.

However, to enhance the user experience, it’s crucial to display the price for each item and the total amount beneath the item list, yet above the **Place My Order** button. Here’s how we can augment our component to fulfill these requirements:

```jsx
export const ShoppingCart = ({ cartItems }: { cartItems: MenuItem[] }) => {
  const totalPrice = cartItems.reduce((acc, item) => (acc += item.price), 0);
  return (
    <div data-testid="shopping-cart" className="shopping-cart">
      <ol>
        {cartItems.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <span>${item.price}</span>
          </li>
        ))}
      </ol>
      <div>Total: ${totalPrice}</div>
      <button disabled={cartItems.length === 0}>Place My Order
       </button>
    </div>
  );
};
```

The **ShoppingCart** component is now equipped to accept a **cartItems** prop, which comprises an array of **MenuItem** objects (instead of a simple string). To compute the total price of items in the cart, we employ the **reduce** method. This method iterates over each item, accumulating their prices to present a total. The component then returns a JSX markup that renders a list of cart items, each displaying its name and price.

This revamped **ShoppingCart** component not only enhances the clarity of the order for users but also lays down a foundation for introducing discount policies, which we can explore as we continue refining our application.

## Applying discounts to Items

Let’s assume we have different discount policies for different types of menu items. For instance, pizzas with more than three toppings receive a 10 percent discount, while large pasta dishes enjoy a 15 percent discount.

To incorporate this, we initially attempt to extend the **MenuItem** class with a new field called **calculateDiscount**:

```source
export class MenuItem {
  //... the private fields
  constructor(item: RemoteMenuItem) {
    //... assignment
  }
  get calculateDiscount() {
    return this.type === 'pizza' && this.toppings >= 3 ? this.price * 
     0.1 : 0;
  }
}
```

However, we encounter a problem – since pasta dishes don’t have toppings, this leads to a type error.

To resolve this, we first extract an interface named **IMenuItem**, and then have **PizzaMenuItem** and **PastaMenuItem** classes implement this interface:

```source
export interface IMenuItem {
  id: string;
  name: string;
  type: string;
  price: number;
  ingredients: string[];
  calculateDiscount(): number;
}
```

Next, we define an abstract class to implement the interface, allowing **PizzaMenuItem** and **PastaMenuItem** to extend the abstract class respectively

```jsx
export abstract class AbstractMenuItem implements IMenuItem {
  private readonly _id: string;
  private readonly _name: string;
  private readonly _price: number;
  private readonly _ingredients: string[];
  protected constructor(item: RemoteMenuItem) {
    this._id = item.id;
    this._name = item.name;
    this._price = item.price;
    this._ingredients = item.ingredients;
  }
  static from(item: IMenuItem): RemoteMenuItem {
    return {
      id: item.id,
      name: item.name,
      price: item.price,
      category: item.type,
      ingredients: item.ingredients,
    };
  }
  //... the getter functions
  abstract calculateDiscount(): number;
}
```

In the **AbstractMenuItem** class, we introduced a static **from** method. This method takes an **IMenuItem** instance and transforms it into a **RemoteMenuItem** instance, preserving the necessary fields for our application.

The **calculateDiscount** method is declared as an abstract method, requiring its child classes to implement the actual discount calculation.

Note

An **abstract class** serves as a base class for other classes and cannot be instantiated on its own. It’s a way to define a common interface and/or implementation for a set of derived classes. Abstract classes often contain abstract methods, which are declared without implementations, leaving it to derived classes to provide specific implementations. By doing so, abstract classes enable a common structure while ensuring that certain methods are implemented in derived classes, promoting a consistent behavior across all derived types. They are a key feature in object-oriented programming, supporting polymorphism and encapsulation.

We need to override and put the actual **calculateDiscount** logic in sub-classes. For **PizzaMenuItem**, it simply extends **AbstractMenuItem** and implements **calculateDiscount**:

```source
export class PizzaMenuItem extends AbstractMenuItem {
  private readonly toppings: number;
  constructor(item: RemoteMenuItem, toppings: number) {
    super(item);
    this.toppings = toppings;
  }
  calculateDiscount(): number {
    return this.toppings >= 3 ? this.price * 0.1 : 0;
  }
}
```

The **PizzaMenuItem** class extends **AbstractMenuItem**, inheriting its properties and methods. It defines a private **readonly** property, **toppings**, to hold the number of toppings. In the constructor, it takes two arguments: **RemoteMenuItem** and **toppings** (which indicates the number of toppings). It calls the constructor of **AbstractMenuItem** with **item** using **super(item)** and initializes **this.toppings** with the passed-in **toppings** argument.

The **calculateDiscount** method is implemented to return a 10% discount if the number of toppings is 3 or more. This method overrides the abstract **calculateDiscount** method from **AbstractMenuItem**.

Similarly, we can create a **PastaMenuItem** class like so:

```source
export class PastaItem extends AbstractMenuItem {
  private readonly servingSize: string;
  constructor(item: RemoteMenuItem, servingSize: string) {
    super(item);
    this.servingSize = servingSize;
  }
  calculateDiscount(): number {
    return this.servingSize === "large" ? this.price * 0.15 : 0;
  }
}
```

The relationship of these classes can be visualized as in *Figure 11**.7*:

![Figure 11.7: Model classes](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781805123972/files/image/B31103_11_07.jpg)

Figure 11.7: Model classes

The **AbstractMenuItem** abstract class implements the **IMenuItem** interface and uses **RemoteMenuItem**. Both **PizzaItem** and **PastaItem** are extending **AbstractMenuItem** and have their own logic for calculating the discount.

Next, in the **MenuList** component, when adding items to the shopping cart, we create instances of the right class based on the item type:

```source
export const MenuList = ({}) => {
  //...
  const [toppings, setToppings] = useState([]);
  const [size, setSize] = useState<string>("small");
  const handleAddMenuItem = (item: IMenuItem) => {
    const remoteItem = AbstractMenuItem.from(item);
    if (item.type === "pizza") {
      onAddMenuItem(new PizzaMenuItem(remoteItem, toppings.length));
    } else if (item.type === "pasta") {
      onAddMenuItem(new PastaItem(remoteItem, size));
    } else {
      onAddMenuItem(item);
    }
  };
  return (
    //...
  );
};
```

The **handleAddMenuItem** function transforms the **IMenuItem** object item into a **RemoteMenuItem** object using the **AbstractMenuItem.from(item)** method. Following this, it checks the type property of the item to determine whether it’s a pizza or pasta. If it’s a pizza, a new **PizzaMenuItem** instance is created using **remoteItem** and the selected number of toppings, and this new item is added to the cart via the **onAddMenuItem** function. If the item is neither a pizza nor pasta, the original item is added to the cart directly through the **onAddMenuItem** function.

Lastly, within the **ShoppingCart** component, we calculate the total discount value similarly to how we calculated the total price, and use it for rendering:

```source
export const ShoppingCart = ({ cartItems }: { cartItems: IMenuItem[] }) => {
  const totalPrice = cartItems.reduce((acc, item) => (acc += item.price), 0);
  const totalDiscount = cartItems.reduce(
    (acc, item) => (acc += item.calculateDiscount()),
    0
  );
  return (
    <div data-testid="shopping-cart">
      {/* rendering the list */}
      <div>Total Discount: ${totalDiscount}</div>
      <div>Total: ${totalPrice - totalDiscount}</div>
      <button disabled={cartItems.length === 0}>Place My Order
       </button>
    </div>
  );
};
```

The **ShoppingCart** component calculates **totalPrice** by iterating over the **cartItems** array and summing up the price of each item. Similarly, it calculates **totalDiscount** by summing up the discounts for each item, obtained by calling the **calculateDiscount()** method on each item. In the returned JSX, it renders a list and displays **totalDiscount** and the final total price (which is **totalPrice** minus **totalDiscount**) below the list.

At this juncture, the function operates effectively. Nonetheless, there are several factors to contemplate – the discount is currently specified on each product: for instance, pizza has its own discount rule while pasta has its own. What would be our approach if we need to implement a store-wide discount, such as a discount for a public holiday?

## Exploring the Strategy pattern

Suppose it’s a bustling Friday night, and we wish to offer a special discount on all pizzas and drinks. However, we don’t intend to apply additional discounts on items already discounted — for instance, a pizza with four toppings should only receive this specific special discount.

Handling such arbitrary discounts can be complex, necessitating a decoupling of the calculation logic from the item type. Moreover, we’d like the flexibility to remove these discounts after Friday or after a certain period.

We can use a design pattern called the **Strategy pattern** to achieve flexibility here. The Strategy pattern is a behavioral design pattern that enables selecting an algorithm’s implementation at runtime. It encapsulates a family of algorithms and makes them interchangeable, allowing the client to choose the most suitable one without modifying the code.

We’ll extract the logic into a separate entity, defining a strategy interface as follows:

```source
export interface IDiscountStrategy {
  calculate(price: number): number;
}
```

This interface provides a blueprint for different discount strategies. For example, we could have a strategy with no discount:

```source
class NoDiscountStrategy implements IDiscountStrategy {
  calculate(price: number): number {
    return 0;
  }
}
```

The **NoDiscountStrategy** class implements the **IDiscountStrategy** interface with a **calculate** method that takes a price as input and returns zero, meaning no discount is applied.

And for **SpecialDiscountStrategy** component, a special discount strategy offering a 15% discount will be applied:

```source
class SpecialDiscountStrategy implements IDiscountStrategy {
  calculate(price: number): number {
    return price * 0.15;
  }
}
```

To utilize these strategies, we need to slightly modify the **IMenuItem** interface:

```source
export interface IMenuItem {
  // ... other fields
  discountStrategy: IDiscountStrategy;
}
```

We added **discountStrategy** with type **IDiscountStrategy** in the **IMenuItem** interface. And because we moved the logic of calculating discount into strategy, we don’t need the **calculateDiscount** abstract method in **AbstractMenuItem** anymore and the class will no longer remain abstract, so we renamed it to **BaseMenuItem** instead. Instead, it will incorporate a setter for the discount strategy and implement the discount calculation:

```source
export class BaseMenuItem implements IMenuItem {
  // ... other fields
  private _discountStrategy: IDiscountStrategy;
  constructor(item: RemoteMenuItem) {
    // ... other fields
    this._discountStrategy = new NoDiscountStrategy();
  }
  // ... other getters
  set discountStrategy(strategy: IDiscountStrategy) {
    this._discountStrategy = strategy;
  }
  calculateDiscount() {
    return this._discountStrategy.calculate(this.price);
  }
}
```

The **BaseMenuItem** class now implements the **IMenuItem** interface and encapsulates a discount strategy, initially set to **NoDiscountStrategy**. It defines a setter to update the discount strategy, and a **calculateDiscount** method, which delegates the discount calculation to the encapsulated discount strategy’s **calculate** method, passing the item’s price as an argument.

*Figure 11**.8* should now give you a much clearer idea of what the relationships are:

![Figure 11.8: The class diagram of all the classes](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781805123972/files/image/B31103_11_08.jpg)

Figure 11.8: The class diagram of all the classes

As observed, **BaseMenuItem** implements the **IMenuItem** interface and utilizes **IDiscountStrategy**. There are multiple implementations of the **IDiscountStrategy** interface for specific discount algorithms, and several classes extend the **BaseMenuItem** class.

Note that the **RemoteMenuItem** type is used by all the classes implementing the **IMenuItem** interface.

Now, when we need to apply a particular strategy, it can be done effortlessly, like so:

```source
export const MenuList = ({
  onAddMenuItem,
}: {
  onAddMenuItem: (item: IMenuItem) => void;
}) => {
  // ...
  const handleAddMenuItem = (item: IMenuItem) => {
    if (isTodayFriday()) {
      item.discountStrategy = new SpecialDiscountStrategy();
    }
    onAddMenuItem(item);
  };
```

In the **MenuList** component, the **handleAddMenuItem** function checks if today is Friday using the **isTodayFriday** function. If it is, it sets **discountStrategy** of the item to a new instance of **SpecialDiscountStrategy** before passing the item to the **onAddMenuItem** function, which is received as a prop. This way, a special discount is applied to the menu item on Fridays.

This setup grants us the desired flexibility. For instance, in the **handleAddMenuItem** function, depending on whether it’s Friday or the item is a pizza, we can easily switch the discount strategy:

```source
const handleAddMenuItem = (item: IMenuItem) => {
  if (isTodayFriday()) {
    item.discountStrategy = new SpecialDiscountStrategy();
  }
  if(item.type === 'pizza') {
    item.discountStrategy = new PizzaDiscountStrategy();
  }
  onAddMenuItem(item);
};
```

In this **handleAddMenuItem** function, depending on certain conditions, a different discount strategy is applied to the item before it’s passed to the **onAddMenuItem** function. Initially, it checks if today is Friday using **isTodayFriday()** and, if true, it assigns a new instance of **SpecialDiscountStrategy** to **item.discountStrategy**. However, if the item is of type **pizza**, irrespective of the day, it overwrites **item.discountStrategy** with a new instance of **PizzaDiscountStrategy**.

This approach keeps our discount logic modular and easy to adjust, catering to different scenarios with minimal code modification. As we’re extracting new logic components – Hooks, data models, domain logic (discount strategies), and views – out of the application code, it’s evolving into a layered frontend application.

## Delving into layered architecture

Our application has transitioned wonderfully to a more robust state, with clear, understandable, and modifiable logic, which is now also more test-friendly.

A further refinement I envision is relocating the logic present in **ShoppingCart** to a custom Hook. We can do this like so:

```source
export const useShoppingCart = (items: IMenuItem[]) => {
  const totalPrice = useMemo(
    () => items.reduce((acc, item) => (acc += item.price), 0),
    [items]
  );
  const totalDiscount = useMemo(
    () => items.reduce((acc, item) => (acc += item.
     calculateDiscount()), 0),
    [items]
  );
  return {
    totalPrice,
    totalDiscount,
  };
};
```

The **useShoppingCart** Hook accepts an array of **IMenuItem** objects and computes two values – **totalPrice** and **totalDiscount**:

- **totalPrice** is calculated by reducing the items, summing up their **price** property
- **totalDiscount** is calculated by reducing the items, summing up the discount for each item obtained by calling **item.calculateDiscount()**

Both calculations are wrapped in **useMemo** to ensure they are only recomputed when the items array changes.

With this modification, **ShoppingCart** becomes elegantly simplified and can easily utilize these values:

```source
export const ShoppingCart = ({ cartItems }: { cartItems: IMenuItem[] }) => {
  const { totalPrice, totalDiscount } = useShoppingCart(cartItems);
  return (
    {/* JSX for the rendering logic */}
  );
};
```

An alternative approach would be employing the context and **useReducer** Hook to manage all logic within context and Hooks, however, since we explored that in [*Chapter 8*](https://learning.oreilly.com/library/view/react-anti-patterns/9781805123972/B21103_08.xhtml#_idTextAnchor212), I’ll leave further exploration to you (you can use both code examples provided in [*Chapter 8*](https://learning.oreilly.com/library/view/react-anti-patterns/9781805123972/B21103_08.xhtml#_idTextAnchor212) and this chapter and try to use **context** and **useReducer** to simplify **ShoppingCart**).

## The layered structure of the application

We’ve delved into organizing components and models into separate files; it’s equally vital to continue refining our project structure. Functions with distinct responsibilities should reside in different folders, streamlining navigation through the application and saving time. Our application now exhibits a fresh structural anatomy:

```source
src
├── App.tsx
├── hooks
│   ├── useMenuItems.ts
│   └── useShoppingCart.ts
├── models
│   ├── BaseMenuItem.ts
│   ├── IMenuItem.ts
│   ├── PastaItem.ts
│   ├── PizzaMenuItem.ts
│   ├── RemoteMenuItem.ts
│   └── strategy
│       ├── IDiscountStrategy.ts
│       ├── NoDiscountStrategy.ts
│       ├── SpecialDiscountStrategy.ts
│       └── TenPercentageDiscountStrategy.ts
└── views
    ├── MenuList.tsx
    └── ShoppingCart.tsx
```

And that’s how the layers formed. Within the view layer, we have primarily pure TSX rendering straightforward tags. These views leverage Hooks for state and side effect management. Meanwhile, in the model layer, model objects encompass business logic, algorithms for toggling between different discount strategies, and data shape transformations, among other functionalities. This structure promotes separation of concerns, making the code organized, reusable, and easier to maintain.

It’s important to note the one-directional link here; the upper layer accesses the lower layer, but not vice versa. TSX uses Hooks for state management, and Hooks employ models for calculations. However, we can’t use JSX or Hooks in the model layer. This layering technique facilitates change or replacement in the underlying layers without impacting the upper layers, promoting a clean and maintainable structure.

In our Code Oven application, as illustrated in *Figure 11**.9*, the layout features a menu items list on the left and a shopping cart on the right. Within the shopping cart, each item displays detailed discount and price information on the page.

![Figure 11.9: Final look and feel of the application](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781805123972/files/image/B31103_11_09.jpg)

Figure 11.9: Final look and feel of the application

## Advantages of layered architecture

The layered architecture confers numerous benefits:

- **Enhanced maintainability**: The division of a component into distinct segments facilitates easier identification and rectification of defects in specific code sections, thus minimizing time spent and reducing the likelihood of engendering new bugs during modifications.
- **Increased modularity**: This architecture is inherently more modular, promoting code reuse and simplifying the addition of new features. Even within each layer, such as views, the code tends to be more composable.
- **Enhanced readability**: The logic within the code becomes significantly more understandable and navigable, an asset not only for the original developer but also for others who may interact with the code base. This clarity is central to effecting changes in the code.
- **Improved scalability**: The reduced complexity within each module renders the application more scalable, making it easier to introduce new features or alterations without impacting the entire system—a critical advantage for large, complex applications projected to evolve over time.
- **Tech-stack migration**: Albeit unlikely in most projects, should the need arise, the view layer can be replaced without altering the underlying models and logic, thanks to the encapsulation of domain logic in pure JavaScript (or TypeScript) code, oblivious to the views’ existence.

## Summary

In this chapter, we implemented layered architecture in our application, enhancing its maintainability, modularity, readability, scalability, and potential for tech-stack migration. By segregating logic, refining the **ShoppingCart** component through a custom Hook, and organizing the application into distinct layers, we’ve significantly bolstered the code’s structure and ease of management. This architectural approach not only streamlines the current code base but also lays a solid foundation for future expansions and refinements.

In the next chapter, we’ll look at the end-to-end journey of implementing an application from scratch, using the user acceptance test-driven development approach, doing refactoring, cleaning up along the way, and always keeping our code as clean as we can.