def hello():
    return "Hello, World!"


greet = hello
print(greet())


# ===============================================
def hello(name="Jose"):
    print("the hello() function has been executed")

    def greet():
        return "\t this is the greet() func inside hello    "

    def welcome():
        return "\t this is the welcome() func inside hello"

    if name == "Jose":
        return greet
    else:
        return welcome


my_greet_func = hello("Jose")
print(my_greet_func())
# the hello() function has been executed
#  this is the greet() func inside hello

my_welcome_func = hello("Guest")
print(my_welcome_func())
# the hello() function has been executed
#  this is the welcome() func inside hello


# ===============================================
def cool():

    def super_cool():
        return "I am very cool"

    return super_cool


some_cool = cool()
print(some_cool())
# I am very cool

# ===============================================
def new_decorator_func(original_func):
    def wrap_func():
        print('some extra code, before the original function')
        original_func()
        print('some extra code, after the original function')
    return wrap_func

#================================================
def func_needs_decorator():
    print('I want to be decorated')
    
decorated_func=new_decorator_func(func_needs_decorator)
decorated_func()

# some extra code, before the original function
# I want to be decorated
# some extra code, after the original function

# or 

@new_decorator_func
def func_needs_decoration():
    print('I want to be decorated')
    
func_needs_decoration()
# some extra code, before the original function
# I want to be decorated
# some extra code, after the original function  