# Write a Python program that takes user input and prints its data type.

value = input("Enter a value: ")
try:
    val = eval(value)
    print(f"Data type:{type(val)}")
except:
    print("Invalid input")
