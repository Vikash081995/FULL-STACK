s = 'hello world'
print(s.capitalize()) # Hello world
print(s.upper()) # HELLO WORLD
print(s.lower()) # hello world
print(s.count('l')) # 3
print(s.find('l')) # 2
print(s.center(20,'z')) # zzhello worldzz
print('hello\thi'.expandtabs()) # hello   hi
s='hello'
print(s.isalnum()) # True
print(s.isalpha()) # True
print(s.islower()) # True
print(s.isupper()) # False
print('HEELO'.isupper()) # True
s="h1h1h1hh1h1h1h1hh1h1hh1"
print(s.split('1'))
print(s.partition('1'))