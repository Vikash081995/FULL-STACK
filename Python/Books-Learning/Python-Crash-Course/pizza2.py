def make_pizza(*toppings):
    for topping in toppings:
        print(f"- {topping}")
        

make_pizza('pepperoni')
make_pizza('mushrooms', 'green peppers', 'extra cheese')