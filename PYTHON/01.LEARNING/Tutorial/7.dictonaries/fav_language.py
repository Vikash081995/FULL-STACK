fav_lang={
    'jen': 'python',
    'sarah': 'c',
    'edward': 'ruby',
    'phil': 'python'
}

lang= fav_lang['sarah'].title()
print(f"Sarah's favorite language is {lang}.")


for key, value in fav_lang.items():
    print(f"{key.title()}'s favorite language is {value.title()}.")
    
for key in fav_lang.keys():
    print(key.title())