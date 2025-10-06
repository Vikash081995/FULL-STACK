import math

#literal assignment 
first = "Dave"
last = "Gray"

print(type(first)) # <class 'str'>
print(type(last)== str)  # True
print(isinstance(first, str)) # True
#==============================================================
#construction function
name = str("Dave Gray")  # <class 'str'>
print(type(name))  # <class 'str'>
print(type(name)==str) # True   
print(isinstance(name, str)) # True
#==============================================================
#casting a number to a string 
decade = str(1980)
print(type(decade)) # <class 'str'>
print(type(decade)==str) # True
print(isinstance(decade, str)) # True
#==============================================================
# Escaping special characters 
sentence ='I\'m back at work! \ "I\'m back at work!"'
print(sentence) # I'm back at work! \ "I'm back at work!"
#==============================================================
# String methods 
print(first);
print(first.lower()) # dave
print(first.upper()) # DAVE

#==============================================================
text = 'hello world'
print(text.capitalize()) # Hello world
print(text.title()) # Hello World
print(text.find('world')) #6
print(text.replace('world', 'universe')) # hello universe
print(text.split()) # ['hello', 'world']

text ='  hello world    '
print(text.strip()) # hello world
print(text.lstrip()) # hello world    
print(text.rstrip()) #   hello world
print(text.endswith('rld')) # True
print(text.count('l')) # 3
print(text.isalnum()) # False
#==============================================================
#Boolean data types
myValue = True
x=bool(False);
print(myValue) # True
print(type(myValue)) # <class 'bool'>
print(isinstance(myValue, bool)) # True

#==============================================================
#Integer data types
price =100
best_price = int(80)

print(type(price)) # <class 'int'>
print(type(best_price)) # <class 'int'>

#==============================================================
#Float data types
gpa = 3.28
y = float(1.14)
print(type(gpa)) # <class 'float'>
#==============================================================
#complex data types
comp_val=5+6j
print(type(comp_val)) # <class 'complex'>
complex_val=3+4j
print(complex_val.real) # 3.0 //accessing the real part of the complex number
print(complex_val.imag) # 4.0 //accessing the imaginary part of the complex number 

#adding complex numbers 
#==============================================================)
num1= 2+3j
num2=1+4j
result = num1+num2
print(result) # (3+7j)
#==============================================================
#built-in functions for numbers 
print(round(gpa)) # 3
print(round(gpa, 1))     # 3.3



print(math.ceil(gpa)) # 4