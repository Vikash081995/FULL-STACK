# String Examples

# ==============================================
# To get a single character from a string, specify its offset inside square brackets after the string’s name. The first (leftmost) offset is 0, the next is 1, and so on. The last (rightmost) offset can be specified with –1, so you don’t have to count; going to the left are –2, –3, and so on:

letters = 'abcdefghijklmnopqrstuvwxyz'
print(letters[0]) #a
print(letters[1]) #b
print(letters[-1]) #z
print(letters[-3]) #x

# ==============================================
fruits = "apple,banana,orange"
print(fruits)
firstFruit = fruits[0]
# ==============================================
# Tripple Quoted Strings
# ==============================================
tripleQuotedString = """
This is a triple quoted string that spans multiple lines.
It can be used to write longer text without using the \n escape character.
"""
print(tripleQuotedString)
# ==============================================
a= 'Duck'
b=a
c='gray duck!'
a+b+c
print(a+b+c)
# DuckDuckgray duck!
# ==============================================
#  You use the * operator to duplicate a string.
start = 'Na'*4+'\n'
middle = 'hey'*3+'\n'
end = 'Goodbye'
print(start+middle+end)

# NaNaNaNa
# heyheyhey
# Goodbye
# ==============================================
name = 'Henny'
print(name.replace('H','P'))
# Penny

pennyExample ='P' + name[1:]
print(pennyExample)
# Penny
# ==============================================
# Using a plain : is the same as 0: (the entire string):
letters[:]
#'abcdefghijklmnopqrstuvwxyz'
print(letters[20:])
#'uvwxyz'
print(letters[10:])
#'klmnopqrstuvwxyz'
# The three last characters:
print(letters[-3:])
#'xyz'
print(letters[18:-3])
#'stuvw'
# ==============================================
letters_length = len(letters)
print(letters_length) #26
# ==============================================
tasks = 'get gloves,get mask,give cat vitamins,call ambulance'
splitted_string=tasks.split(',')
print(splitted_string)
# ['get gloves', 'get mask', 'give cat vitamins', 'call ambulance']

tasks.split()
# ['get', 'gloves,get', 'mask,give', 'cat', 'vitamins,call', 'ambulance']

# ==============================================
crypto_list =['yeti','pika','koala','elephant','monkey']
crypto_string =', '.join(crypto_list)
print('Found and signing books deals',crypto_string)
# ==============================================
setup = 'a duck goes into a bar...'
setup_replace=setup.replace('duck','marmoset')
print(setup)
print(setup_replace)
# a marmoset goes into a bar...
# ==============================================
s="inconceivable!"
print(s.startswith('incon')) #True
print(s.endswith('able!')) #True
print(s.endswith('inconceivable!')) #True
print(s.endswith('ABOMINATION!')) #False

# ==============================================
world = "    earth    "
print(world.strip()) #earth
print(world.strip(' ')) #earth
print(world.lstrip()) #earth
print(world.rstrip()) #    earth

# ==============================================
thing = 'woodchuck'
print('{}'.format(thing))
# woodchuck

place = 'lake'
'The {} is in the {}'.format(thing,place)
print(f'The {thing} is in the {place}')
#'The woodchuck is in the lake'
print(f"The {thing.capitalize()} is in the {place.rjust(20)}")
# The Woodchuck is in the                 lake
# ==============================================
