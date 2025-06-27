my_string ="hello"

my_list =[]

for letter in my_string:
    my_list.append(letter)
print(my_list)  # ['h', 'e', 'l', 'l', 'o']

my_new_list = [ letter for letter in my_string]
print(my_new_list) # ['h', 'e', 'l', 'l', 'o']

my_numbers = [ x for x in range(0,10)]
print(my_numbers) # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

multiple_of_two = [x*2 for x in range(1,10)]
print(multiple_of_two) # [2, 4, 6, 8, 10, 12, 14, 16, 18]

even_nums = [ x for x in range(1,10) if x%2==0]
print(even_nums) # [2, 4, 6, 8]

# if and else in list comprehension
res= [x if x%2==0 else 'odd' for x in range(1,10)]
print(res)

# ['odd', 2, 'odd', 4, 'odd', 6, 'odd', 8, 'odd']

