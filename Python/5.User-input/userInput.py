import sys

import random 

playerChoice = input("Enter your choice: rock, paper or scissors: ")
player = int(playerChoice);

if player <1 | player >3:
    sys.exit("Invalid input")
    
comuterChoice = random.choice("123");

computer = int(comuterChoice);

print("");
print("Player chose: " + playerChoice);
print("Computer chose: " + comuterChoice);

if player == 1 and computer == 3:
    print("Player wins!")
elif player == 2 and computer == 1:
    print("Player wins!")
else: 
    print("Computer wins!")