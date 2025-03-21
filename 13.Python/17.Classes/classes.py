class Vehicle:
    
    def __init__(self,make,model):
        self.make = make
        self.model = model
    def moves(self):
        print("Moves along")
    def get_make(self):
        print(f"I'm a {self.make}")


my_car = Vehicle("Ford","Mustang")
my_car.get_make()
my_car.moves()

#==============================================================
class Dog:
    def __init__(self,name,age):
        self.name = name
        self.age = age 
    
    def bark(self):
        return f"{self.name} says woof!"

#Create an instance of the Dog class
my_dog = Dog("buddy",3)
print(my_dog.bark()) #buddy says woof!
#==============================================================
#classes with class variables 

class Dog:
    species = "mammal" #class variable
    def __init__(self,name,age):
        self.name = name #instance variable
        self.age = age #instance variable
    def description(self):
        return f"{self.name} is {self.age} years old"
    def speak(self,sound):
        return f'${self.name} says ${sound}'
    
#Create an instance of the Dog class
my_dog = Dog('Buddy',3)
dog2 = Dog('Molly',2)
print(my_dog.description()) #Buddy is 3 years old
print(dog2.description()) #Molly is 2 years old

#==============================================================
#inheritance
class Animal:
    def __init___(self,name):
        self.name = name
    def speak(self):
        return NotImplementedError("Subclass must implement this method")
    
class Dog(Animal):
    def speak(self):
        return f"{self.name} says woof!"

class Cat(Animal):
    def speak(self):
        return f"${self.name} says meow!"

#Create instance of Dog and Cat classes 
dog = Dog("Buddy")
cat = Cat("Whiskers")

print(dog.speak()) #Buddy says woof!
print(cat.speak()) #Whiskers says meow