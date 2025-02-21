users =['Dave','John','Sara']
data = ['Dave',42,True]

emptylist = []
print("Dave" in emptylist) #False
print(users[0]) #Dave
print(users[-1]) #Sara
print(users.index('Sara')) #2
print(users[0:2]) #['Dave', 'John']
print(users[1:]) #['John', 'Sara']
print(users[-3:-1]) #['Dave', 'John']
print(len(data)) #3
users.append('Elsa')
print(users) #['Dave', 'John', 'Sara', 'Elsa']
users+=['Mike','Tom']
print(users) #['Dave', 'John', 'Sara', 'Elsa', 'Mike', 'Tom']
users.extend(['Henry','Adam'])
print(users) #['Dave', 'John', 'Sara', 'Elsa', 'Mike', 'Tom', 'Henry', 'Adam']
# users.extend(data)
# print(users) #['Dave', 'John', 'Sara', 'Elsa', 'Mike', 'Tom', 'Henry', 'Adam', 'Dave', 42, True]

data.insert(0,'Bob')
print(data) #['Dave', 'Bob', 42, True]
users[2:2]=['Eddie','Alex']
print(users) #['Dave', 'John', 'Eddie', 'Alex', 'Sara', 'Elsa', 'Mike', 'Tom', 'Henry', 'Adam']
users[1:3]=['Robert','JP']
print(users) #['Dave', 'Robert', 'JP', 'Alex', 'Sara', 'Elsa', 'Mike', 'Tom', 'Henry', 'Adam']
users.remove('Dave')
print(users) #['Robert', 'JP', 'Alex', 'Sara', 'Elsa', 'Mike', 'Tom', 'Henry', 'Adam']
print(users.pop()) #Adam
print(users) #['Robert', 'JP', 'Alex', 'Sara', 'Elsa', 'Mike', 'Tom', 'Henry']

del users[0]
print(users) #['JP', 'Alex', 'Sara', 'Elsa', 'Mike', 'Tom', 'Henry']
users.sort()
print(users) #['Alex', 'Elsa', 'Henry', 'JP', 'Mike', 'Sara', 'Tom']