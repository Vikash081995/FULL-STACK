name = input("Enter your name: ")
print("Hello " + name)
# Output:
# Enter your name: John
# Hello John

#==============================================================
#Interger input 
age = int(input("Enter your age: "))
print("You are " + str(age) + " years old")
# Output:
#Enter your age: 25
# You are 25 years old
#==============================================================
#Float input
height = float(input("Enter your height:"));
print(f"your height is {height} cm")
# Output:
# Enter your height: 175.5
# Your height is 175.5 cm
#==============================================================
x,y=input("Enter two numbers separated by a space: ").split()
x=int(x)
y=int(y)
print(x+y)
# Output:
# Enter two numbers separated by a space: 10 20
# 30
#==============================================================
#handling invalid input 
try:
    x=int(input("Enter a number: "))
    print(f'You entered {x}')
except ValueError:
    print("Invalid input. Please enter a valid number.")
# Output:
# Enter a number: abc
# Invalid input. Please enter a valid number.
#==============================================================