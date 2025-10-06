users = ["Dave", "John", "Sara"]
data = ["Dave", 42, True]

emptylist = []
print("Dave" in emptylist)  # False
print(users[0])  # Dave
print(users[-1])  # Sara
print(users.index("Sara"))  # 2
print(users[0:2])  # ['Dave', 'John']
print(users[1:])  # ['John', 'Sara']
print(users[-3:-1])  # ['Dave', 'John']
print(len(data))  # 3
users.append("Elsa")
print(users)  # ['Dave', 'John', 'Sara', 'Elsa']
users += ["Mike", "Tom"]
print(users)  # ['Dave', 'John', 'Sara', 'Elsa', 'Mike', 'Tom']
users.extend(["Henry", "Adam"])
print(users)  # ['Dave', 'John', 'Sara', 'Elsa', 'Mike', 'Tom', 'Henry', 'Adam']
# users.extend(data)
# print(users) #['Dave', 'John', 'Sara', 'Elsa', 'Mike', 'Tom', 'Henry', 'Adam', 'Dave', 42, True]

data.insert(0, "Bob")
print(data)  # ['Dave', 'Bob', 42, True]
users[2:2] = ["Eddie", "Alex"]
print(
    users
)  # ['Dave', 'John', 'Eddie', 'Alex', 'Sara', 'Elsa', 'Mike', 'Tom', 'Henry', 'Adam']
users[1:3] = ["Robert", "JP"]
print(
    users
)  # ['Dave', 'Robert', 'JP', 'Alex', 'Sara', 'Elsa', 'Mike', 'Tom', 'Henry', 'Adam']
users.remove("Dave")
print(users)  # ['Robert', 'JP', 'Alex', 'Sara', 'Elsa', 'Mike', 'Tom', 'Henry', 'Adam']
print(users.pop())  # Adam
print(users)  # ['Robert', 'JP', 'Alex', 'Sara', 'Elsa', 'Mike', 'Tom', 'Henry']

del users[0]
print(users)  # ['JP', 'Alex', 'Sara', 'Elsa', 'Mike', 'Tom', 'Henry']
users.sort()
print(users)  # ['Alex', 'Elsa', 'Henry', 'JP', 'Mike', 'Sara', 'Tom']


nums = [4, 42, 78, 1, 5]
nums.reverse()
print(nums)  # [5, 1, 78, 42, 4]

nums.sort(reverse=True)
print(nums)  # [78, 42, 5, 4, 1]

print(sorted(nums))  # [1, 4, 5, 42, 78]

numsCopy = nums.copy()
mynums = list(nums)
mycopy = nums[:]

print(numsCopy)  # [78, 42, 5, 4, 1]
print(mynums)  # [78, 42, 5, 4, 1]
mycopy.sort()
print(mycopy)  # [1, 4, 5, 42, 78]
print(nums)  # [78, 42, 5, 4, 1]

mylist = list([1, "Neil", True])
print(mylist)  # [1, 'Neil', True]

# Tuples
myTuple = tuple(("Dave", "John", "Sara"))
anotherTuple = (1, 4, 2, 8)
print(type(myTuple))  # <class 'tuple'>)
print(type(anotherTuple))  # <class 'tuple'>)

newList = list(myTuple)
print(newList)  # ['Dave', 'John', 'Sara']
newList.append("Elsa")
newtuple = tuple(newList)
print(newtuple)  # ('Dave', 'John', 'Sara', 'Elsa')

(one, two, *hey) = anotherTuple
print(one)  # 1
print(two)  # 4
print(hey)  # [2, 8]

print(anotherTuple.count(2))  # 1

#==============================================
#copying lists
my_foods = ['pizza','falafel','carrot cake']
friend_foods = my_foods[:]

print("My favorite foods are:")
print(my_foods)
print("my friends fav foods are:")
print(friend_foods)

my_foods.append('cannoli')
friend_foods.append('ice cream')

print("My favorite foods are:")
print(my_foods)
print("my friends fav foods are:")
print(friend_foods)

#==============================================
my_new_foods =['pizza','falafel','carrot cake']
friends_new_foods = my_new_foods
my_new_foods.append('cannoli')
friends_new_foods.append('ice cream')

print("My favorite foods are:")
print(my_new_foods)
print("my friends fav foods are:")
print(friends_new_foods)
