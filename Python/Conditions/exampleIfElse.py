# checking if number is postive or negative

number =int(input("Enter a number: "))  

if number > 0:
    print("Positive")
elif number<0:
    print("Negative")
else:
    print("Zero")
    
#===============================================================
#Checking if a person is eligible to vote
age = int(input("Enter your age: "))
if age >=18:
    print("You are eligible to vote")
else:
    print("You are not eligible to vote")
#===============================================================
#Determining the largest number among three numbers

num1=int(input("Enter the first number: "))
num2=int(input("Enter the second number: "))
num3=int(input("Enter the third number: "))

if num1>num2 and num1>num3:
    print(f"{num1} is the largest number")
elif num2>num1 and num2>num3:
    print(f"{num2} is the largest number")
else:
    print(f"{num3} is the largest number")

#===============================================================
#Checking if a year is a leap year 
year = int(input("Enter a year: "))

if(year%4==0 and year%100!=0) or (year%400==0):
    print(f"{year} is a leap year")
else:
    print(f"{year} is not a leap year")
# ============================================================
#Grade classification based on marks 

marks = int(input("Enter your marks: "))

if  marks>=90:
    print("A")
elif marks>=80:
    print("B")
elif marks>=70:
    print("C")
elif marks>=60:
    print("D")
else:
    print("Fail")
# ============================================================