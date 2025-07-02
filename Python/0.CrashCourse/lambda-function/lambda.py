def square(num):
    return num**2
my_nums = [1, 2, 3, 4, 5]

for item in map(square,my_nums):
    print(item)

#===========================
def splicer(myString):
    if len(myString)%2 == 0:
        return 'EVEN'
    else:
        return myString[0]

names=['Andy', 'Eve', 'Sally']
print(list(map(splicer,names)))
# ['EVEN', 'E', 'S'] 
#===========================

def check_even(num):
    return num%2 == 0

my_nums = [1, 2, 3, 4, 5]

print(list(filter(check_even,my_nums)))

# [2, 4]

for n in filter(check_even,my_nums):
    print(n)
    
# 2
# 4
#===========================
square = lambda num: num **2
print(square(5))

sq=list(map(lambda num:num**2, my_nums))
print(sq)
# [1, 4, 9, 16, 25]

#==========================
even=list(filter(lambda n:n%2 == 0,my_nums))
print(even)
# [2, 4]
#==========================
print(list(map(lambda x:x[::-1],names)))

#==========================
