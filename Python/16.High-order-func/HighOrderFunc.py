def square(x):
    return x*x

numbers = [1,2,3,4,5]
square_numbers = list(map(square,numbers))
print(square_numbers)
# Output : [1, 4, 9, 16, 25]

# ===============================================

odd_numbers = list(filter(lambda num : num % 2 != 0,numbers))
print(list(odd_numbers))

# ===============================================
from functools import reduce

def add(x,y):
    return x+y

numbers = [1,2,3,4,5]
sum_numbers = reduce(add,numbers)
print(sum_numbers) # 15

# ===============================================
# Passing Functions as Arguments

def greet(name):
    return f"hello,{name}"

def call_function(func,args):
    return func(args)

print(call_function(greet,"Alice"))

# ===============================================