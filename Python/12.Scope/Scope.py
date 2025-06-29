name = "Global"

def greeting():
    color="Local"
    print(color)
    print(name)
    
# print(color)


#=======    ======================================================
global_name ="This is global variable"

def greet():
    global_name = "This is local variable"
    def hello():
        print(global_name+'hello')
    hello()
greet()

#===============================================================
x=50

def func(x):
    print(f'x is {x}')
    x=200
    print(f'i just locally changed x to {x}')
    
func(x)
# x is 50
# i just locally changed x to 200

#===============================================================