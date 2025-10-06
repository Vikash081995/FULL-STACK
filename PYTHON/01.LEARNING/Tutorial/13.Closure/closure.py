# Closure is a function having access to the parent scope,even after the parent function has closed.

def parent_function(person):
    coins = 3

    def play_games():
        nonlocal coins
        coins -= 1

        if coins > 1:
            print(f"{person} has {coins} coins left")
        elif coins == 1:
            print(f"{person} has {coins} coin left")
        else:
            print(f"{person} has no coins left")
    return play_games


tommy = parent_function("Tommy")
jenny = parent_function('Jenny')

tommy()
jenny()

# Tommy has 2 coins left
# Jenny has 2 coins left\

# ==============================================
# Counter Closure


def make_counter():
    count = 0

    def counter():
        nonlocal count  
        count += 1
        return count

    return counter

counter1 = make_counter()
print(counter1()) #output:1
print(counter1()) #output: 2

#===============================================