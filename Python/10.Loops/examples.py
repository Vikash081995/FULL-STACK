index_count =0

word = "abcde"

for letter in word:
    print(word[index_count])
    index_count += 1
    
# Output: a b c d e

# Using enumerate to get index and value
words = "abcde"

for item in enumerate(words):
    print(item)

# Output: (0, 'a')
# (1, 'b')
# (2, 'c')
# (3, 'd')
# (4, 'e')