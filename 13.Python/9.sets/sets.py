nums ={1,2,3,4,5,6}

nums2= set((1,2,3,4,5))

print(nums) #{1, 2, 3, 4, 5, 6 }
print(nums2) #{1, 2, 3, 4, 5}
print(type(nums)) #<class 'set'>
print(len(nums)) #6

# No Duplicates allowed
nums ={1,2,2,3,4,5,5}
print(nums)

# True is a dup of 1, False is a dup of 0
nums ={1,True,2,False,3,4,0}
print(nums)
# {False, 1, 2, 3, 4}

# Add a new element  to the set
nums.add(8)
print(nums)
#{False, 1, 2, 3, 4, 8}

# add elements from one set to another 
morenums ={10,11,12}
nums.update(morenums)
print(nums)
#{False, 1, 2, 3, 4, 8, 10, 11, 12}


#you can use update with lists, tuples, and dictionaries too

#Merge two sets to create a new set ]
one = {1,2,3}
two = {5,6,7}

mynewset = one.union(two)
print(mynewset)
#{1, 2, 3, 5, 6, 7}