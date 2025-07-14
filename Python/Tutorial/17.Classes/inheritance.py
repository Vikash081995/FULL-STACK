class Animal():
    def __init__(self):
        print("Animal created")
    def who_am_i(self):
        print("I am an animal")
    def eat(self):
        print("I am eating")

animal = Animal()
animal.eat()
# Animal created
# I am eating

class Dog(Animal):
    def __init__(self):
        Animal.__init__(self)
        print("Dog created")
    
    def who_am_i(self):
        print("I am a dog")
    
    def eat(self):
        print("I am a dog and I am eating")

dog = Dog()
# Dog created
# Animal created

dog.eat()
# I am eating
dog.who_am_i()
# I am a dog

dog.eat()
#I am a dog and I am eating