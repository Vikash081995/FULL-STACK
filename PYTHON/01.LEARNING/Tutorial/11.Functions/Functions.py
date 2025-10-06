def hello():
    print("Hello World")


hello()


# ===============================================
def hello_with_name(name):
    print("Hello " + name)


hello_with_name("Vijay")


# Hello Vijay
# ===============================================
def sum(a, b):
    print(a + b)
    return a + b


sum(10, 20)


# 30
# ===============================================
def multiply(a, b):
    if type(a) is not int or type(b) is not int:
        return "Please enter numbers"
    return a * b


print(multiply(10, 20))
# 200
print(multiply(10, "20"))


# Please enter numbers
# ===============================================
def is_even(num):
    if num % 2 == 0:
        return True
    else:
        return False


print(is_even(10))


# ===============================================
def sum2(num1=0, num2=0):
    return num1 + num2


total = sum2(10, 20)
total2 = sum2(10)
print(total)
# 30
print(total2)
# 10


# ===============================================
def multiple_items(*args):
    print(args)
    print(type(args))


multiple_items("Dave", "John", "Sara")
# ('Dave', 'John', 'Sara')
# <class 'tuple'>


# ===============================================
def mult_named_items(**kwargs):
    print(kwargs)
    print(type(kwargs))


mult_named_items(name1="Dave", name2="John", name3="Sara")

# {'name1': 'Dave', 'name2': 'John', 'name3': 'Sara'}
# <class 'dict'>
# ===============================================


def say_Hello(name):
    print(f"hello {name}")


say_Hello("Vijay")

# ==============================================


def even_numbers(num):
    result = num % 2 == 0
    return result


print(even_numbers(10))
# True
print(even_numbers(11))
# False


# ===    ===========================================
def check_even_list(num_list):
    even_numbers = []
    for number in num_list:
        if number % 2 == 0:
            even_numbers.append(number)
        else:
            pass
    return even_numbers


print(check_even_list([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
# [2, 4, 6, 8, 10]
# ==============================================
