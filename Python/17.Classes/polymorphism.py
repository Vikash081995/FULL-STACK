class Dog():
    def __init__(self, name):
        self.name = name
        
    def speak(self):
        return self.name + " says woof!"    

class Cat():
    def __init__(self, name):
        self.name = name
        
    def speak(self):
        return self.name + " says meow!"    

niko = Dog("Niko")
felik= Cat("Felik")

print(niko.speak())
print(felik.speak())
# Niko says woof!
# Felik says meow!

for pet in [niko,felik]:
    print(type(pet))
    print(pet.speak())

# <class '__main__.Dog'>
# Niko says woof!
# <class '__main__.Cat'>
# Felik says meow!

# ==============================================================
class Animal():
    def __init__(self,name):
        self.name = name
        
    def speak(self):
        raise NotImplementedError("Subclass needs to implement this abstract method")

my_animal = Animal("Fred")
# my_animal.speak()

class Doggy(Animal):

    def speak(self):
        return self.name + " says woof!"


class Cat(Animal):

    def speak(self):
        return self.name + " says meow  !"

fido = Doggy("Fido")
isis = Cat("Isis")
print(fido.speak())
print(isis.speak())

# Fido says woof!
# Isis says meow  ! 