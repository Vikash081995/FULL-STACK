class sample():
    pass


mySample = sample()
print(type(mySample))
#==============================================================
class Dog:
    def __init__(self,breed,name,spots):
        self.breed = breed
        self.name=name
        self.spots=spots
    def barks(self):
        return f"{self.name} says woof!"
        
myDog = Dog(breed="Labrador",name="Max",spots=False)
print(myDog.breed)
print(myDog.name)
print(myDog.barks())
# Labrador
# Max
# Max says woof!

#==============================================================
class MyName():
    def __init__(self,name):
        self.name = name 


my_name = MyName(name="John")
print(my_name.name)
# John
    

#==============================================================
class Circle():
    pi=3.14
    
    def __init__(self,radius=1):
        self.radius= radius
        self.area = radius * radius * self.pi
    def get_circumference(self):
        return self.radius * self.pi *2

my_circle = Circle(30)
print(my_circle.get_circumference())
print(my_circle.area)