requested_toppings =[]

if requested_toppings:
    for requested_topping in requested_toppings:
        print(f"Adding {requested_topping}.")
    print("\nFinished making your pizza!\n")
else:
    print("Are you sure you want a plain pizza?")