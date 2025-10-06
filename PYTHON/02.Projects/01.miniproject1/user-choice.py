def position_choice():
    choice='wrong'
    while choice not in ['0','1','2']:
        choice = input('pick a position(0,1,2):')
        if choice not in ['0','1','2']:
            print("Sorry, but you did not choose a valid position")
    return int(choice)
    
position_choice()


def replacement_choice(game_list,position):
    user_placement = input('Type a string to place at this position:')
    game_list[position]=user_placement
    return game_list

replacement_choice(game_list,1)