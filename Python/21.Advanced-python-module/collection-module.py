from collections import Counter 
mylist = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
print(Counter(mylist))
# Counter({1: 1, 2: 2, 3: 3, 4: 4})

my_list2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
print(Counter(my_list2))
# Counter({'a': 1, 'b': 1, 'c': 1, 'd': 1, 'e': 1, 'f': 1, 'g': 1, 'h': 1, 'i': 1, 'j': 1})

print(Counter('aaaabbbbbbbccc'))
# Counter({'a': 4, 'b': 6, 'c': 3})

sentence = 'How many times does each word show up in this sentence?'
print(Counter(sentence.split()))
# Counter({'How': 1, 'many': 1, 'times': 1, 'does': 1, 'each': 1, 'word': 1, 'show': 1, 'up': 1, 'in': 1, 'this': 1, 'sentence?': 1})

letter = 'aaaabbbbbbbccc'
c = Counter(letter)
print(c.most_common())
print(list(c))


#=====================================================
from collections import defaultdict
d = defaultdict(list)
d['a'].append(1)
d['a'].append(2)
d['a'].append(3)
print(d)
# defaultdict(<class 'list'>, {'a': [1, 2, 3]})

d = defaultdict(set)
d['a'].add(1)
d['a'].add(2)
d['a'].add(3)
print(d)
# defaultdict(<class 'set'>, {'a': {1, 2, 3}})