my_list1= [1,2,3]
my_list2= ['a','b','c']

for item in zip(my_list1, my_list2):
    print(item)
# Output: (1, 'a') (2, 'b') (3, 'c')

my_list3=[100,200,300]

for item in zip(my_list1, my_list2, my_list3):
    print(item)
# Output: (1, 'a', 100) (2, 'b', 200) (3, 'c', 300)

print(list(zip(my_list1, my_list2 )))
# Output: [(1, 'a'), (2, 'b'), (3, 'c')]