dimensions =(200,50)
print(dimensions[0])
print(dimensions[1])

# dimensions[1] = 500
# print(dimensions[1])
#'tuple' object does not support item assignment
#==========================
#Looping through all the variables in tuple 

for dimension in dimensions:
    print(dimension)
#========================
# Writing over tuple
dimensions = (400, 100)
print("\\n modified dimensions")
for newDim in dimensions:
    print(newDim)