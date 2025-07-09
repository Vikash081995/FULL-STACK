bicycles = ["trek", "cannondale", "redline", "specialized"]
print(bicycles)
# ['trek', 'cannondale', 'redline', 'specialized']
print(bicycles[0])
# trek`
print(bicycles[0].title())
# Trek
message = f"My first bicycle was a {bicycles[0].title()}."
print(message)
# My first bicycle was a Trek.

# ================================
magicians = ["alice", "david", "carolina"]

for magician in magicians:
    print(f"{magician.title()},that was a great trick")
    print(f"i can't wait to see the next trick,{magician.title()}\n")

print("Thank you, everyone. That was a great magic show!")

# =====================
numbers = list(range(1, 6))
print(numbers)

# =====================
even_numbers = list(range(2, 11, 2))
print(even_numbers)

# =====================
squares = []
for value in range(1, 11):
    square = value**2
    squares.append(square)

print(squares)
# [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
# ======================
squares = [value**2 for value in range(1, 11)]
print(squares)
# [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
# ==========================
# Slicing the list
#===============================
players = ["charles", "martina", "michael", "florence", "eli"]
print(players[0:4])
# ['charles', 'martina', 'michael', 'florence']
print(players[:4])
# ['charles', 'martina', 'michael', 'florence']
print(players[2:])
# ['michael', 'florence', 'eli']
print(players[-3:])
# ['michael', 'florence', 'eli']
#==================================
#Looping through a slice 
#===============================
print("print the first three players on the team")
for player in players[:3]:
    print(player.title())