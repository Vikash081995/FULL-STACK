def create_cubes(n):
    result=[]
    for x in range(n):
       yield x**3
  
for x in create_cubes(10):
    print(x)
    
# Output: 0 1 8 27 64 125 216 343
#===============================================

def get_fibon(n):
    a=1
    b=1
    for i in range(n):
        yield a
        a,b = b,a+b
        
for number in get_fibon(10):
    print(number)
    
#===============================================
def simple_gen():
    for x in range(3):
        yield x
    
for number in simple_gen():
    print(number)
    
g = simple_gen()
print(next(g))
print(next(g))
