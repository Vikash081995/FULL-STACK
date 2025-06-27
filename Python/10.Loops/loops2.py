my_list =[1,2,3,4,5,6,7,8,9,10]

for num in my_list:
    print(num)
# 1
# 2
# 3
# 4
# 5
# 6
# 7
# 8
# 9
# 10
print("====================================")
for num in my_list:
    if num %2 ==0:
        print("even number:", num)
    else:
        print("odd number:", num)
        
# even number: 2
# odd number: 1
# even number: 4    
#====================================
list_sum = 0
for num in my_list:
    list_sum += num
print(list_sum) # 55
#====================================
my_string ="Hello World"

for letter in my_string:
    print(letter)
# H
# e
# l
# l
# o
#   
# W
# o
# r
# l
# d
print("====================================")
for _ in my_string:
    print("X", end="")
# XXXXXXXXXXX
print("\n====================================")