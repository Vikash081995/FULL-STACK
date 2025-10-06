example =[1,2,3,4,5,6,7,8]

from random import shuffle 
shuffle(example)
print(example)

def suffle_list(my_list):
    shuffle(my_list)
    return my_list
result = suffle_list(example)
print(result)

#=====================================

my_list2=['',0,'']
suffle_list(my_list2)

def player_guess():
    guess=''
    while guess not in ['0','1','2']:
        guess = input("Pick a number: 0,1 or 2")
    return int(guess)