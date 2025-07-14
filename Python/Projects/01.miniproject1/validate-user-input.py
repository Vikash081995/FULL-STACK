def user_choice():
    choice = 'WRONG'
    while choice.isdigit() == False:
        choice = int(input("Please enter your choice(0-10):"))
        if choice.isdigit() == False:
            print("Sorry that is not a digit")
        return choice

user_choice()