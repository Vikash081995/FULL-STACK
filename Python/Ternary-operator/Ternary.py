# value_if_true if condition else value_if_false

age=18
status = "adult" if age >= 18 else "minor"
print(status) # adult

#===============================================
#Checking Even or Odd
number =int(input("Enter a number: "))
result ="Even" if number % 2 == 0 else "Odd"
print(result)
#===============================================
#Determining if a person is eligible to vote 
age = int(input("Enter your age: "))
eligibility = "Eligible to vote" if age >=18 and age <= 100 else "Not eligible to vote"
print(eligibility)
#===============================================
#Determining the largest number among three numbers

num1=int(input("Enter the first number: "))
num2=int(input("Enter the second number: "))
num3=int(input("Enter the third number: "))

largest = num1 if num1 > num2 and num1 > num3 else num2 if num2 > num1 and num2 > num3 else num3
print(f"{largest} is the largest number")